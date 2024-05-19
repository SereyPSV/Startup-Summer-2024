module.exports = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/movies",
        permanent: true,
      },
      // Wildcard path matching
    ];
  },
};
