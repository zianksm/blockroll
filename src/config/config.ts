export const newConfig = {
  env: process.env.NEXT_PUBLIC_NODE_ENV || 'production',
  mock: process.env.NEXT_PUBLIC_MOCK_STATUS ?? 'true',
  port: process.env.NEXT_PUBLIC_PORT || 3000,
  api: inferUrl(),
};

function inferUrl() {
  console.log(
    'a',
    process.env.NEXT_PUBLIC_APP_STAGING,
    process.env.NEXT_PUBLIC_NODE_ENV,
    process.env.NEXT_PUBLIC_MOCK_STATUS,
  );

  switch (process.env.NEXT_PUBLIC_NODE_ENV) {
    case 'production':
      return process.env.NEXT_PUBLIC_API_PRODUCTION || '/';
    default:
      return process.env.NEXT_PUBLIC_APP_STAGING ?? '/';
  }
}
