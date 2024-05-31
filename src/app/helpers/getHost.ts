import { headers } from 'next/headers';

type HostData = {
  headers: {
    host: string;
    referer: string;
    'x-forwarded-host': string;
    'x-forwarded-port': string;
    'x-forwarded-proto': string;
    'x-forwarded-for': string;
  };
};

export default function getHost() {
  const h = headers() as any as HostData;

  const HOST = {
    origin: `${h.headers['x-forwarded-proto']}://${h.headers.host}`,
    api: `${h.headers['x-forwarded-proto']}://${h.headers.host}/api`,
    host: h.headers.host,
    port: h.headers['x-forwarded-port'],
    protocol: h.headers['x-forwarded-proto'],
  };

  return HOST;
}
