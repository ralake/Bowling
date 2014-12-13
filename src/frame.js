function Frame() {
	this.pinsHit = null
};

Frame.prototype.roll1 = function(pinsHit) {
	this.roll1Score = pinsHit;
	this.pinsHit += pinsHit;
};

Frame.prototype.roll2 = function(pinsHit) {
	this.roll2Score = pinsHit;
	this.pinsHit += pinsHit;
};

Frame.prototype.isSpare = function() {
	return this.roll1Score < 10 && this.pinsHit === 10;
};
Frame.prototype.isStrike = function() {
	return (this.roll1Score || this.roll2Score) === 10
};