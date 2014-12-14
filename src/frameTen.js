function FrameTen () {
	this.pinsHit = null;
	this.roll1Score = null;
	this.roll2Score = null;
	this.roll3Score = null;
	this.bonus = null;
};

FrameTen.prototype.roll1 = function(pinsHit) {
	this._illegalRoll(pinsHit);
	this.roll1Score = pinsHit;
	this.pinsHit += pinsHit;
};

FrameTen.prototype.roll2 = function(pinsHit) {
	this._illegalRoll(pinsHit);
	this.roll2Score = pinsHit;
	this.pinsHit += pinsHit;
};

FrameTen.prototype.roll3 = function(pinsHit) {
	if (this.pinsHit < 10) {
		throw Error("You are not allowed a third roll")
	}
	this.roll2Score = pinsHit;
	this.pinsHit += pinsHit;
};

FrameTen.prototype.isSpare = function() {
	return this.roll1Score < 10 && this.pinsHit === 10;
};
FrameTen.prototype.isStrike = function() {
	return ((this.roll1Score || this.roll2Score || this.roll3Score) === 10);
};

FrameTen.prototype._illegalRoll = function(pinsHit) {
	if (pinsHit > 10) {
		throw Error("There are only ten pins");
	}
	else {
	}
};