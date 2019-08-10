import { createElement, render } from '/web_modules/preact.js';
import { LayersPanel } from './layers.js';

render(createElement(LayersPanel), document.querySelector('main'));
