function Game() {
	this.frames = [];
}

Game.prototype.setupFrames = function(frame) {
	for(var i = 0; i < 10; i++) {
		this.frames.push(new frame);
	}
};

Game.prototype.calculateScore = function() {
	this.score = 0;
	for(var i = 0; i < 10; i++) {
		this._spareBonus(this.frames[i]);
		this._strikeBonus(this.frames[i]);
		this.score += (this.frames[i].pinsHit + this.frames[i].bonus);
	}
	return this.score;
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
};

Game.prototype._firstRollBonus = function(frame) {
	return this.frames[this.frames.indexOf(frame) + 1].roll1Score;
};

Game.prototype._secondRollBonus = function(frame) {
	return this.frames[this.frames.indexOf(frame) + 1].roll2Score || this.frames[this.frames.indexOf(frame) + 2].roll1Score;
};


