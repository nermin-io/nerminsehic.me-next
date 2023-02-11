import { NextApiRequest, NextApiResponse } from 'next';
import createSpotifyClient from '../../services/spotify';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = createSpotifyClient();
  const { data, status } = await client.get(
    '/me/player/currently-playing?market=AU'
  );

  if (status === 204 || status >= 400) return res.json({ playing: false });

  return res.json({
    playing: data.is_playing,
    id: data.item.id,
    name: data.item.name,
    artists: data.item.artists.map((artist: any) => artist.name).join(', '),
    url: data.item.external_urls.spotify,
    image_url: data.item.album.images.find((image: any) => image.height === 300 && image.width === 300)?.url
  });
}
