import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { FaPlay, FaPause } from "react-icons/fa";

const Player = ({ audioUrl, title, isPlaying, onPlayToggle, theme }) => {
  const containerRef = useRef(null);
  const wavesurfer = useRef(null);
  const [isPlayingLocal, setIsPlayingLocal] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Define colors based on theme
  const waveColor = theme === "light" ? "#b0b0b0" : "#6c757d";
  const progressColor = theme === "light" ? "#1a1a1a" : "#ffffff";
  const cursorColor = theme === "light" ? "#1a1a1a" : "#ffffff";

  // Format time as MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    wavesurfer.current = WaveSurfer.create({
      container: containerRef.current,
      waveColor: waveColor,
      progressColor: progressColor,
      cursorColor: cursorColor,
      barWidth: 2,
      barRadius: 3,
      cursorWidth: 1,
      height: 60,
      barGap: 3,
      responsive: true,
      url: audioUrl, // Load audio directly
    });

    wavesurfer.current.on("ready", () => {
      setDuration(wavesurfer.current.getDuration());
    });

    wavesurfer.current.on("audioprocess", (time) => {
      setCurrentTime(time);
    });

    wavesurfer.current.on("timeupdate", (time) => {
        setCurrentTime(time);
    });

    wavesurfer.current.on("finish", () => {
      setIsPlayingLocal(false);
      if (isPlaying && onPlayToggle) {
          onPlayToggle(); // Notify parent to toggle off
      }
    });

    wavesurfer.current.on('interaction', () => {
        if (!isPlayingLocal) {
             wavesurfer.current.play();
             setIsPlayingLocal(true);
             if (onPlayToggle) onPlayToggle();
        }
    });

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, [audioUrl]); // Re-init only when audio source changes

  useEffect(() => {
    // Update WaveSurfer colors dynamically when theme changes without re-initializing
    if (wavesurfer.current) {
      wavesurfer.current.setOptions({
        waveColor,
        progressColor,
        cursorColor,
      });
    }
  }, [theme, waveColor, progressColor, cursorColor]);
  // Sync with external playing state (e.g. from parent managing one-at-a-time)
  useEffect(() => {
    if (wavesurfer.current) {
      if (isPlaying) {
        wavesurfer.current.play();
        setIsPlayingLocal(true);
      } else {
        wavesurfer.current.pause();
        setIsPlayingLocal(false);
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    if (onPlayToggle) {
      onPlayToggle();
    } else {
        // Fallback for independent use
        if (wavesurfer.current) {
            wavesurfer.current.playPause();
            setIsPlayingLocal(wavesurfer.current.isPlaying());
        }
    }
  };

  const remainingTime = duration - currentTime;

  return (
    <div className="waveform-player w-100 d-flex align-items-center gap-3">
        <div className="play-button-container" onClick={togglePlay} style={{ cursor: 'pointer' }}>
            <div className={`play-icon-circle ${isPlayingLocal ? 'playing' : ''}`}>
                 {isPlayingLocal ? <FaPause size={20} /> : <FaPlay size={20} className="pl-1" />}
            </div>
        </div>
        
        <div className="flex-grow-1 overflow-hidden" style={{ minWidth: 0 }}>
             <div className="d-flex justify-content-between align-items-center mb-1">
                 <h5 className="mb-0 text-truncate fw-bold player-title" style={{ fontSize: '1rem', fontFamily: 'Marcellus' }}>{title}</h5>
                 <span className="small opacity-75 fw-bold" style={{ fontFamily: 'monospace' }}>
                    {formatTime(remainingTime > 0 ? remainingTime : 0)}
                 </span>
             </div>
             <div ref={containerRef} className="waveform-container" />
        </div>
    </div>
  );
};

export default Player;
