/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native'
import {name as appName} from './app.json'
import App from './dev/app.main.js';

AppRegistry.registerComponent(appName, () => App)
