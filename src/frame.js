function Frame(number) {
	this.frameNumber = number;
	this.pinsHit = null;
	this.roll1Score = null;
	this.roll2Score = null;
	this.roll3Score = null;
	this.bonus = null;
};

Frame.prototype.roll1 = function(pinsHit) {
	this._illegalRoll(pinsHit);
	this.roll1Score = pinsHit;
	this._updateScore(pinsHit);
};

Frame.prototype.roll2 = function(pinsHit) {
	this._illegalRoll(pinsHit);
	this.roll2Score = pinsHit;
	this._updateScore(pinsHit);
};

Frame.prototype.roll3 = function(pinsHit) {
	if (this.frameNumber === 10 && this.pinsHit < 10 || this.frameNumber !== 10) {
		throw Error("You are not allowed a third roll")
	}
	this.roll3Score = pinsHit;
	this._updateScore(pinsHit);
};

Frame.prototype.isSpare = function() {
	return this.roll1Score < 10 && this.pinsHit === 10;
};
Frame.prototype.isStrike = function() {
	return ((this.roll1Score || this.roll2Score || this.roll3Score) === 10);
};

Frame.prototype._updateScore = function(pinsHit) {
	this.pinsHit += pinsHit;
};

Frame.prototype._illegalRoll = function(pinsHit) {
	if (pinsHit > 10 || (this.pinsHit + pinsHit > 10 && this.frameNumber !== 10) || this.frameNumber !== 10 && this.isStrike()) {
		throw Error("There are only ten pins");
	}
	else {
	}
};