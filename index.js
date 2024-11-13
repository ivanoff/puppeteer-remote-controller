const guzel = require('./src');
const puppeteer = require('puppeteer');

const a = ({page}) => page.goto('http://ships.trade');

puppeteer.launch({headless: true, args: ['--no-sandbox']}).then(b => guzel(b, {functions: {a}}));
