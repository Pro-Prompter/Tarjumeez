import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { FaPlay, FaPause } from "react-icons/fa";

const OBSERVE_OPTIONS = { threshold: 0.3 };

function useInView(ref) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      OBSERVE_OPTIONS,
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return inView;
}

const Player = ({
  audioUrl,
  title,
  isPlaying,
  onPlayToggle,
  theme = "dark",
}) => {
  const containerRef = useRef(null);
  const audioRef = useRef(null);
  const wavesurferRef = useRef(null);

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const isInView = useInView(containerRef);

  // Initialize WaveSurfer once when visible
  useEffect(() => {
    if (!isInView || wavesurferRef.current || !audioRef.current) return;

    const ws = WaveSurfer.create({
      container: containerRef.current,
      waveColor: theme === "light" ? "#b0b0b0" : "#6c757d",
      progressColor: theme === "light" ? "#1a1a1a" : "#ffffff",
      cursorColor: theme === "light" ? "#1a1a1a" : "#ffffff",
      barWidth: 2,
      height: 60,
      responsive: true,
      media: audioRef.current,
    });

    wavesurferRef.current = ws;

    ws.on("ready", () => {
      setDuration(ws.getDuration());
    });

    ws.on("audioprocess", (time) => {
      setCurrentTime(time);
    });

    ws.on("finish", () => {
      onPlayToggle();
    });

    return () => {
      ws.destroy();
      wavesurferRef.current = null;
    };
  }, [isInView]);

  // Update waveform colors when theme changes
  useEffect(() => {
    const ws = wavesurferRef.current;
    if (!ws) return;
    ws.setOptions({
      waveColor: theme === "light" ? "#b0b0b0" : "#6c757d",
      progressColor: theme === "light" ? "#1a1a1a" : "#ffffff",
      cursorColor: theme === "light" ? "#1a1a1a" : "#ffffff",
    });
  }, [theme]);

  // Sync external play/pause state
  useEffect(() => {
    const ws = wavesurferRef.current;
    if (!ws) return;

    if (isPlaying) ws.play();
    else ws.pause();
  }, [isPlaying]);

  const formatTime = (t) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const remaining = duration - currentTime;

  return (
    <>
      <audio
        ref={audioRef}
        src={audioUrl}
        preload="auto"
        style={{ display: "none" }}
      />

      <div className="waveform-player d-flex align-items-center gap-3">
        <button
          onClick={onPlayToggle}
          className="player__play-btn"
          aria-label={isPlaying ? "Pause" : "Play"}
          type="button"
        >
          {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
        </button>

        <div className="flex-grow-1" style={{ minWidth: 0 }}>
          <div className="d-flex justify-content-between align-items-center mb-1">
            <h5 className="mb-0 text-truncate fw-bold">{title}</h5>
            <span className="small opacity-75">
              {formatTime(Math.max(remaining, 0))}
            </span>
          </div>

          <div ref={containerRef} className="waveform-container" />
        </div>
      </div>
    </>
  );
};

export default Player;
