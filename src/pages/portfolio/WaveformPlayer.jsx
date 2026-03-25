import React, { useEffect, useRef, useState, useCallback } from "react";
import WaveSurfer from "wavesurfer.js";

// Hook to prevent loading 50+ waveforms at once (Performance)
function useInView(ref) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 } 
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return inView;
}

export default function WaveformPlayer({ url, label, title }) {
  const containerRef = useRef(null);
  const wavesurferRef = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const isInView = useInView(containerRef);

  useEffect(() => {
    // Only initialize when the user actually scrolls to the player
    if (!isInView || wavesurferRef.current || !containerRef.current) return;

    let cancelled = false;

    const ws = WaveSurfer.create({
      container: containerRef.current,
      waveColor: "#d1d5db",
      progressColor: "#53A7B1",
      cursorColor: "transparent",
      barWidth: 2,
      barGap: 2,
      barRadius: 4,
      height: 60,
      normalize: true,
      interact: true,
      responsive: true,
    });

    ws.load(url).catch((err) => {
      if (err.name === "AbortError") return; // expected during cleanup
      console.error(err);
    });

    ws.on("ready", () => { if (!cancelled) setDuration(ws.getDuration()); });
    ws.on("audioprocess", (time) => { if (!cancelled) setCurrentTime(time); });
    ws.on("play", () => { if (!cancelled) setIsPlaying(true); });
    ws.on("pause", () => { if (!cancelled) setIsPlaying(false); });
    ws.on("finish", () => {
      if (cancelled) return;
      setIsPlaying(false);
      ws.seekTo(0);
    });

    wavesurferRef.current = ws;

    return () => {
      cancelled = true;
      try { ws.destroy(); } catch { /* absorb AbortError during teardown */ }
      wavesurferRef.current = null;
    };
  }, [url, isInView]);

  const handleToggle = useCallback(() => {
    wavesurferRef.current?.playPause();
  }, []);

  const formatTime = (t) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="demos-player" style={{ marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span className="demos-player-label" style={{ fontWeight: 700 }}>{label || title}</span>
        <span style={{ fontSize: '0.82rem', color: '#888' }}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>

      <div className="demos-player-inner">
        <button
          className={`demos-toggle-btn${isPlaying ? " playing" : ""}`}
          onClick={handleToggle}
          type="button"
          style={{ border: 'none', background: 'none', cursor: 'pointer' }}
        >
          {isPlaying ? (
            <svg width="22" height="26" viewBox="0 0 22 26">
              <rect x="2" y="2" width="6" height="22" rx="1" fill="#53A7B1" />
              <rect x="14" y="2" width="6" height="22" rx="1" fill="#53A7B1" />
            </svg>
          ) : (
            <svg width="22" height="26" viewBox="0 0 22 26">
              <polygon points="0,0 22,13 0,26" fill="#2a3035" />
            </svg>
          )}
        </button>

        <div style={{ flex: 1, cursor: "pointer", minWidth: 0 }}>
          <div ref={containerRef} />
        </div>
      </div>
    </div>
  );
}