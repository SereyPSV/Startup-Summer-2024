import { AspectRatio } from "@mantine/core";

export function YouTubeVideo({ videoId }: { videoId: string }) {
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src={youtubeUrl}
        title="YouTube video player"
        style={{ border: 0 }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
  );
}
