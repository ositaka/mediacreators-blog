const config = {
	siteTitle: 'The blog of mediacreators.studio',
	siteTitleShort: 'The blog of mediacreators.studio',
	siteTitleAlt: 'The blog of mediacreators.studio',
	siteLogo: '/logos/logo-1024.png',
	siteUrl: 'https://mediacreators.be',
	repo: '',
	pathPrefix: '',
	dateFromFormat: 'YYYY-MM-DD',
	dateFormat: 'MMMM Do, YYYY',
	siteDescription:
		'Here we share all our challenges, inspiration and tools, we use on our creative professional work.',
	siteRss: '/rss.xml',
	googleAnalyticsID: '',
	postDefaultCategoryID: '',
	newsletter: '',
	newsletterEmbed: '',
	userName: 'Nuno Marques',
	userEmail: 'info@mediacreators.studio',
	userTwitter: '',
	menuLinks: [
		{
			name: 'About us',
			link: '/about-us/'
		},
		{
			name: 'Articles',
			link: '/blog/'
		},
		{
			name: 'Contact',
			link: '/contact/'
		}
	],
	themeColor: '#4c4ae4', // Used for setting manifest and progress theme colors.
	backgroundColor: '#ffffff'
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
	config.pathPrefix = ''
} else {
	// Make sure pathPrefix only contains the first forward slash
	config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
	config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
	config.siteRss = `/${config.siteRss}`

module.exports = config
