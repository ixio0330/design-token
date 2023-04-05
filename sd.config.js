module.exports = {
  source: ['tokens/*.json'],
  platforms: {
    js: {
      transformGroup: 'js',
      buildPath: 'src/styles/global/',
      files: [
        // sizing
        {
          destination: 'sizing.js',
          format: 'javascript/module',
          filter: { attributes: { category: 'sizing' } },
        },
        // spacing
        {
          destination: 'spacing.js',
          format: 'javascript/module',
          filter: { attributes: { category: 'spacing' } },
        },
        // borderRadius
        {
          destination: 'borderRadius.js',
          format: 'javascript/module',
          filter: { attributes: { category: 'borderRadius' } },
        },
        // fontFamily
        {
          destination: 'fontFamily.js',
          format: 'javascript/module',
          filter: { attributes: { category: 'fontFamily' } },
        },
        // fontWeight
        {
          destination: 'fontWeight.js',
          format: 'javascript/module',
          filter: { attributes: { category: 'fontWeight' } },
        },
        // lineHeight
        {
          destination: 'lineHeight.js',
          format: 'javascript/module',
          filter: { attributes: { category: 'lineHeight' } },
        },
        // fontSize
        {
          destination: 'fontSize.js',
          format: 'javascript/module',
          filter: { attributes: { category: 'fontSize' } },
        },
        // typography
        {
          destination: 'typography.js',
          format: 'javascript/module',
          filter: { attributes: { category: 'typography' } },
        },
      ],
    },
  },
};
