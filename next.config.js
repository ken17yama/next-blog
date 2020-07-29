require('dotenv').config();

module.exports = {
	// some configuration
	assetPrefix: process.env.GITHUB_PAGES ? "/next-blog" : ""
	// another configuration
};
