const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './config/theme.config.tsx',
  unstable_contentDump: true,
  unstable_flexsearch: true,
  unstable_staticImage: true,
});

module.exports = withNextra();
