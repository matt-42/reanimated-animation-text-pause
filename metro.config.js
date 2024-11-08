// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');


module.exports = getDefaultConfig(__dirname);
module.exports.resolver.assetExts.push('dat', 'txt', 'svg');
// module.exports = {
//   ...module.exports,
//   resolver: { ...module.exports.resolver,
//       assetExts: [...module.exports.resolver.assetExts, "dat"]
//   }
// };