function Frame(number) {
	this.stats = {
							  number: number,
							 	pinsHit: null,
					  		roll1Score: null,
					  		roll2Score: null,
					  		roll3Score: null,
					 	    bonus: null
								}
};

Frame.prototype.roll1 = function(pinsHit) {
	this._illegalRoll(pinsHit);
	this.stats.roll1Score = pinsHit;
	this._updateScore(pinsHit);
};

Frame.prototype.roll2 = function(pinsHit) {
	this._illegalRoll(pinsHit);
	this.stats.roll2Score = pinsHit;
	this._updateScore(pinsHit);
};

Frame.prototype.roll3 = function(pinsHit) {
	if (this.stats.number !== 10 || this.stats.number === 10 && this.stats.pinsHit < 10) {
		throw Error("You are not allowed a third roll")
	}
	this.stats.roll3Score = pinsHit;
	this._updateScore(pinsHit);
};

Frame.prototype.isSpare = function() {
	return this.stats.roll1Score < 10 && this.stats.pinsHit === 10;
};
Frame.prototype.isStrike = function() {
	return ((this.stats.roll1Score || this.stats.roll2Score || this.stats.roll3Score) === 10);
};

Frame.prototype._updateScore = function(pinsHit) {
	this.stats.pinsHit += pinsHit;
};

Frame.prototype._illegalRoll = function(pinsHit) {
	if (pinsHit > 10 || (this.stats.number !== 10 && (this.isStrike() || this.stats.pinsHit + pinsHit > 10))) {
		throw Error("There are only ten pins");
	}
	else {
	}
};
