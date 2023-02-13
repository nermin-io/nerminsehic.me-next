import { NextApiRequest, NextApiResponse } from 'next';
import createSpotifyClient from '../../services/spotify';

const constructArtistNames = (artists: Array<any>) => {
  return artists.map(artist => artist.name).join(', ');
}

const findImageUrlByDimensions = (images: Array<any>, dimensions: number) => {
  return images.find(image => image.height === dimensions && image.width === dimensions)?.url
}

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
    artists: constructArtistNames(data.item.artists),
    url: data.item.external_urls.spotify,
    image_url: findImageUrlByDimensions(data.item.album.images, 300)
  });
}
