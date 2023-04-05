// Temp
const tokenJson = require(`./tokens/${process.env.TARGET}.json`);
console.log(tokenJson);

const tokenOrigin = require('./tokens.json');
const tokenList = [];

for (const tokenKey in tokenOrigin[process.env.TARGET]) {
  tokenList.push(tokenKey);
}

module.exports = {
  source: [`tokens/${process.env.TARGET}.json`],
  platforms: {
    js: {
      transformGroup: 'js',
      buildPath: `src/styles/${process.env.TARGET}/`,
      files: tokenList.map((token) => ({
        destination: `${token}.js`,
        format: 'javascript/module',
        filter: { attributes: { category: token } },
      })),
    },
  },
};
