import axios from "axios";
import { isBefore, addSeconds } from "date-fns";

let sessionExpiresAt: Date;

const useSpotifyClient = () => {
  const client = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_SHOPIFY_BASE_URL}/v1`,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  client.interceptors.request.use(async (config) => {
    if (sessionExpiresAt && isBefore(new Date(), sessionExpiresAt))
      return config;

    const clientId = `${process.env.NEXT_PUBLIC_SHOPIFY_CLIENT_ID}`;
    const clientSecret = `${process.env.NEXT_PUBLIC_SHOPIFY_CLIENT_SECRET}`;

    const form = new FormData();
    form.append("grant_type", "client_credentials");

    const options = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Basic ${Buffer.from(
          clientId + ":" + clientSecret
        ).toString("base64")}`,
      },
      data: form,
    };

    const { data, status } = await axios.post(
      `${process.env.NEXT_PUBLIC_SHOPIFY_CREDENTIALS_URL}`,
      options
    );

    if (status === 200 && config.headers) {
      config.headers["Authorization"] = `Bearer ${data.access_token}`;
      sessionExpiresAt = addSeconds(new Date(), data.expires_in);

      return config;
    }

    return config;
  });

  return client;
};

export default useSpotifyClient;
