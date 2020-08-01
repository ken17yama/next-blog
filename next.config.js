
module.exports = {
	// some configuration
	assetPrefix: process.env.NODE_ENV === "production" ? "/next-blog" : "",
	// another configuration

	webpack: (config, { isServer }) => {
		if (isServer) {
			require('./scripts/generate-sitemap');
		}
		return config;
	}
};
