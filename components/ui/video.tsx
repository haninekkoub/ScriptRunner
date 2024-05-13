"use client";

import { useRef } from "react";
import HlsPlayer from "react-hls-player";

export default function Video({ playbackId }: { playbackId: string }) {
  if (!playbackId) return null;

  const videoUrl = `https://stream.mux.com/${playbackId}.m3u8`;
  const videoRef = useRef(null);
  return (
    <HlsPlayer
      className="h-[100vh] w-[100vw] absolute  inset-0 object-cover -z-20"
      src={videoUrl}
      autoPlay
      muted
      playsInline
      loop
      controls={false}
      playerRef={videoRef}
    />
  );
}
