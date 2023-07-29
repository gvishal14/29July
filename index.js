/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Home from './src/Home';
import ProductList from './src/ProductList';
import AddProduct from './src/AddProduct';


 AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Home);
// AppRegistry.registerComponent(appName, () => ProductList);
// AppRegistry.registerComponent(appName, () => AddProduct);


