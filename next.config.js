/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig


module.exports = (phase) => {
  if(phase === PHASE_DEVELOPMENT_SERVER) {

  return {
  env : {
    mongodb_username : "stephint",
    mongodb_password : "1929",
    mongodb_clustername : "cluster0",
    mongodb_database : "my-site-dev",
  },
};
}
return {
  env : {
    mongodb_username : "stephint",
    mongodb_password : "1929",
    mongodb_clustername : "cluster0",
    mongodb_database : "my-site",
  },
};

}
