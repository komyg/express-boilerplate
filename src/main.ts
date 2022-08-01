import 'dotenv/config';

import { buildApplication } from './application';

async function main() {
  const server = await buildApplication();
  const port = Number(process.env.HTTP_PORT) || 3000;

  server.listen(port, () => {
    console.log(`Server is listening port: ${port}.`);
  });
}

main();
