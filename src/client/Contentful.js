import { createClient } from 'contentful';

export default createClient({
  space: process.env.API_SPACE,
  accessToken: process.env.ACCESS_TOKEN,
});
