export default function Video({ playbackId }: { playbackId: string }) {
  const posterUrl = `/_next/image?url=https%3A%2F%2Fimage.mux.com%2F${playbackId}%2Fthumbnail.webp%3Ffit_mode%3Dsmartcrop%26time%3D0&amp;w=3840&amp;q=75`;
  const url = `https://stream.mux.com/${playbackId}/high.mp4`;
  if (!playbackId) return null;
  return (
    <video
      autoPlay
      loop
      playsInline
      muted
      poster={posterUrl}
      className="h-full w-full absolute inset-0 object-cover z-50"
    >
      <source src={url} type="video/mp4" />
    </video>
  );
}
