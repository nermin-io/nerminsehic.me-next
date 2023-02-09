import axios from 'axios';
import { isBefore, addSeconds } from 'date-fns';
import qs from 'qs';

let sessionExpiresAt: Date;
let accessToken: string;

const useSpotifyClient = () => {
  const client = axios.create({
    baseURL: `${process.env.SPOTIFY_BASE_URL}/v1`,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  client.interceptors.request.use(async (config) => {
    if (
      accessToken &&
      sessionExpiresAt &&
      isBefore(new Date(), sessionExpiresAt)
    ) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
      return config;
    }

    const clientId = `${process.env.SPOTIFY_CLIENT_ID}`;
    const clientSecret = `${process.env.SPOTIFY_CLIENT_SECRET}`;
    const options = {
      url: `${process.env.SPOTIFY_CREDENTIALS_URL}`,
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(
          clientId + ':' + clientSecret
        ).toString('base64')}`,
      },
      data: qs.stringify({
        grant_type: 'refresh_token',
        refresh_token: `${process.env.SPOTIFY_REFRESH_TOKEN}`,
      }),
    };

    const { data, status } = await axios(options);

    if (status === 200 && config.headers) {
      config.headers['Authorization'] = `Bearer ${data.access_token}`;
      sessionExpiresAt = addSeconds(new Date(), data.expires_in);
      accessToken = data.access_token;
      return config;
    }

    return config;
  });

  return client;
};

export default useSpotifyClient;
