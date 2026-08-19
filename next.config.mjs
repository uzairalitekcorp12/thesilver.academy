/** @type {import('next').NextConfig} */
const nextConfig = {

  /* ========================================================================
     REACT
     ======================================================================== */

  reactStrictMode:
    true,


  /* ========================================================================
     PRODUCTION RESPONSE
     ======================================================================== */

  poweredByHeader:
    false,


  /* ========================================================================
     IMAGE CONFIGURATION

     Most Silver Academy assets are local inside /public/assets.

     Unsplash remains allowed because some existing/development components
     may still use it as a temporary remote image source.
     ======================================================================== */

  images: {
    qualities: [
      75,
      90,
    ],

    remotePatterns: [
      {
        protocol:
          "https",

        hostname:
          "images.unsplash.com",
      },
    ],
  },

};


export default nextConfig;
