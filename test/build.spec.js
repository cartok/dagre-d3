// http://tech.namshi.io/blog/2016/07/20/the-copy-paste-guide-foror-creating-npm-packages-in-es6-with-babel-and-webpack/#.WQf5PQS86Nc.reddit
// https://www.sitepoint.com/beginners-guide-node-package-manager/

const test = require('ava')
const myModule = require('../dist/build')

test('the log method', t => {
    t.is(myModule.log('hi'), 'Logging the message : hi')
})