import { AppRegistry } from 'react-native';
// import App from './src/App';
import AppTest from './src/AppTest';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppTest);
