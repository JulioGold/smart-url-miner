var smartUrlMiner = {
	mine: mine
};

module.exports = smartUrlMiner;

function mine(content) {
	return content.match(/((https?:|[wW]{3,3}).*?)(?=["'#\n])/igm);
};