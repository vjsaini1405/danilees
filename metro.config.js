const { getDefaultConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

const config = getDefaultConfig(__dirname);

// If you have any custom configuration, you can modify `config` here

module.exports = wrapWithReanimatedMetroConfig(config);
