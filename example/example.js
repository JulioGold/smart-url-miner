var content = '<a href="https://docs.npmjs.com">documentation</a><a href="http://blog.npmjs.org/">blog</a><a href="https://www.npmjs.com/package/smart-zip">smart-zip</a><a href="https://www.npmjs.com/package/smart-combin">smart-combin</a><a href="https://github.com/JulioGold/smart-zip">smart-zip</a><a href="https://github.com/JulioGold/smart-combin">smart-combin</a>';

var smartUrlMiner = require('../smartUrlMiner');

var urlList = smartUrlMiner.mine(content);

console.log(urlList);