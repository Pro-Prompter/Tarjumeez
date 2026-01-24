import React, { useEffect, useRef, useState, useCallback } from "react";
import WaveSurfer from "wavesurfer.js";
import { FaPlay, FaPause } from "react-icons/fa";

// Simple hook to detect when element enters the viewport
function useInView(ref, options) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return inView;
}

const Player = ({ audioUrl, title, theme = "light" }) => {
  const containerRef = useRef(null);
  const wavesurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Whether the waveform container has scrolled into view
  const isInView = useInView(containerRef, { threshold: 0.3 });

  // **Preload audio in background on mount**
  useEffect(() => {
    const audio = new Audio(audioUrl);
    audio.preload = "auto";  // Hint to browser to download
    audio.load();
  }, [audioUrl]);

  // Initialize WaveSurfer only when in view
  useEffect(() => {
    if (!isInView || wavesurferRef.current) return;

    const waveColor = theme === "light" ? "#b0b0b0" : "#6c757d";
    const progressColor = theme === "light" ? "#1a1a1a" : "#ffffff";
    const cursorColor = theme === "light" ? "#1a1a1a" : "#ffffff";

    const ws = WaveSurfer.create({
      container: containerRef.current,
      waveColor,
      progressColor,
      cursorColor,
      barWidth: 2,
      height: 60,
      responsive: true,
      backend: "MediaElement", // uses HTML audio for playback
    });

    wavesurferRef.current = ws;

    // Load audio (this triggers an HTTP request — but browser cache should make it fast)
    ws.load(audioUrl);

    ws.on("ready", () => {
      setDuration(ws.getDuration());
    });

    ws.on("audioprocess", (time) => {
      setCurrentTime(time);
    });

    ws.on("finish", () => {
      setIsPlaying(false);
    });

    return () => {
      ws.destroy();
      wavesurferRef.current = null;
    };
  }, [isInView, audioUrl, theme]);

  const handlePlayPause = useCallback(() => {
    const ws = wavesurferRef.current;
    if (!ws) return;
    ws.playPause();
    setIsPlaying(ws.isPlaying());
  }, []);

  const formatTime = (t) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const remaining = duration - currentTime;

  return (
    <div className="waveform-player d-flex align-items-center gap-3">
      <div
        className="play-button-container"
        onClick={handlePlayPause}
        style={{ cursor: "pointer" }}
      >
        <div className={`play-icon-circle ${isPlaying ? "playing" : ""}`}>
          {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
        </div>
      </div>

      <div className="flex-grow-1" style={{ minWidth: 0 }}>
        <div className="d-flex justify-content-between align-items-center mb-1">
          <h5 className="mb-0 text-truncate fw-bold">{title}</h5>
          <span className="small opacity-75">
            {formatTime(Math.max(remaining, 0))}
          </span>
        </div>
        <div
          ref={containerRef}
          className="waveform-container"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default Player;
