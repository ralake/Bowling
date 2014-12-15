function Game() {
	this.frames = [];
	this.score = 0;
}

Game.prototype.setupFrames = function(frame) {
	for(var i = 0; i < 10; i++) {
		this.frames.push(new frame(i+1))
	}
};

Game.prototype.calculateScore = function() {
	for(var i = 0; i < 10; i++) {
		this._spareBonus(this.frames[i]);
		this._strikeBonus(this.frames[i]);
		this.score += (this.frames[i].pinsHit + this.frames[i].bonus);
	}
	return this.score;
};

Game.prototype.gutterGame = function() {
	return (this.score === 0 && this.frames[9].roll2Score === 0)
};

Game.prototype.perfectGame = function() {
	return (this.score === 300)
};

Game.prototype._spareBonus = function(frame) {
	if (frame.isSpare()) {
		frame.bonus += this._firstRollBonus(frame);
	}
	else {
	}
};

Game.prototype._strikeBonus = function(frame) {
	if (frame.isStrike()) {
		frame.bonus += (this._firstRollBonus(frame) + this._secondRollBonus(frame))
	}
	else {
	}
};

Game.prototype._firstRollBonus = function(frame) {
	if (frame === this.frames[9]) {
		return null;
	}
	else {
	return this._nextFrame(frame).roll1Score;
}
};

Game.prototype._secondRollBonus = function(frame) {
	if (frame === this.frames[9]) {
		return null;
	}
	else {
	return this._nextFrame(frame).roll2Score || this._secondNextFrame(frame).roll1Score;
	}
};

Game.prototype._nextFrame = function(frame) {
	return this.frames[this.frames.indexOf(frame) + 1]
};

Game.prototype._secondNextFrame = function(frame) {
	return this.frames[this.frames.indexOf(frame) + 2]
};

