const nextConfig = {
	experimental: {
	  appDir: true,
	  serverComponentsExternalPackages: ["mongoose"],
	},
	images: {
	  domains: ['lh3.googleusercontent.com'],
	},
	webpack(config) {
	  config.experiments = {
		...config.experiments,
		topLevelAwait: true,
	  };
	  return config;
	},
  };
  
  module.exports = {
	...nextConfig,
	async headers() {
	  return [
		{
		  source: '/favicon.ico',
		  headers: [
			{
			  key: 'Cache-Control',
			  value: 'public, max-age=86400, must-revalidate',
			},
		  ],
		},
	  ];
	},
  };