/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/socials/github",
        destination: "https://github.com/binary-blazer/portfolio",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
