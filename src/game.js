function Game() {
	this.frames = [];
	this.score = 0;
}

Game.prototype.addFrame = function(frame) {
	if (this.frames.length === 10) {
		throw Error("There are already ten frames");
	}
	else {
	this.frames.push(frame);
	this._calculateBonus(frame);
	this._calculateTotalScore();
	}
};

Game.prototype._spareBonus = function(frame) {
	var previousFrame = this.frames[this.frames.indexOf(frame) - 1];
	if (previousFrame.isSpare()) {
		previousFrame.bonus += frame.roll1Score;
	}
	else {
	}
};

Game.prototype._strikeBonus = function(frame) {
	var previousFrame = this.frames[this.frames.indexOf(frame) - 1];
	if (previousFrame.isStrike()) {
		previousFrame.bonus += frame.pinsHit;
	}
	else {
	}
};

Game.prototype._calculateBonus = function(frame) {
	if (this.frames.length === 2) {
		this._spareBonus(frame);
		this._strikeBonus(frame);
	}
	else {
	}
};

Game.prototype._calculateTotalScore = function() {
	var score = 0;
	this.frames.forEach(function(frame) {
		score += (frame.pinsHit + frame.bonus);
	});
	this.score = score;
};
