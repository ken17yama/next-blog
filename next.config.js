require('dotenv').config();

module.exports = {
	basePath: process.env.GITHUB_PAGES === "production" ? "/next-blog" : "",
	// some configuration
	assetPrefix: process.env.GITHUB_PAGES === "production" ? "/next-blog" : ""
	// another configuration
};
