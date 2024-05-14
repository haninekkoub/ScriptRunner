import MuxPlayer from "@mux/mux-player-react";

export default function Video({
  playbackId,
  title,
}: {
  playbackId: string;
  title?: string;
}) {
  const embedUrl = `https://embed.mux.com/video/${playbackId}`;

  if (!playbackId) return null;

  return (
    <MuxPlayer
      className="h-[100vh] w-[100vw] absolute  inset-0 object-cover -z-20"
      muted
      autoPlay
      loop
      playsInline
      playbackId={playbackId}
      metadata={title ? { video_title: title } : undefined}
    />
  );
}
