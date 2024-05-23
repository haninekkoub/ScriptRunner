export default function Video({ playbackId }: { playbackId: string }) {
  const posterUrl = `/_next/image?url=https%3A%2F%2Fimage.mux.com%2F${playbackId}%2Fthumbnail.webp%3Ffit_mode%3Dsmartcrop%26time%3D0&amp;w=3840&amp;q=75`;
  const url = `https://stream.mux.com/${playbackId}/high.mp4`;
  const urlWebm = `https://stream.mux.com/${playbackId}/high.webm`;
  if (!playbackId) return null;
  return (
    <video
      autoPlay
      loop
      playsInline
      muted
      src={url}
      poster={posterUrl}
      className="h-full w-full absolute inset-0 object-cover -z-20"
    >
      <source src={url} type="video/mp4" />
      <source src={urlWebm} type="video/webm" />
    </video>
  );
}
