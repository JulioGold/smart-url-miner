# smart-url-miner
Mine the urls from a content like a html page for example.

## Usage

```
npm install smart-url-miner
```  

```javascript
var content = '<a href="https://docs.npmjs.com">documentation</a><a href="http://blog.npmjs.org/">blog</a><a href="https://www.npmjs.com/package/smart-zip">smart-zip</a><a href="https://www.npmjs.com/package/smart-combin">smart-combin</a><a href="https://github.com/JulioGold/smart-zip">smart-zip</a><a href="https://github.com/JulioGold/smart-combin">smart-combin</a>';

var smartUrlMiner = require('smart-url-miner');

var urlList = smartUrlMiner.mine(content);

console.log(urlList);
```  

Thanks  