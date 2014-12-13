function Game() {
	this.frames = [];
	this.score = 0;
};

Game.prototype.addFrame = function(frame) {
	if (this.frames.length === 10) {
		throw Error("There are already ten frames");
	}
	else {
	this.frames.push(frame);
	this.calculateBonus(frame);
	this.calculateTotalScore();
	}
};

Game.prototype.spareBonus = function(frame) {
	var previousFrame = this.frames[this.frames.indexOf(frame) - 1];
	if (previousFrame.isSpare()) {
		previousFrame.bonus += frame.roll1Score;
	}
	else {
	}
};

Game.prototype.calculateBonus = function(frame) {
	if (this.frames.length > 1) {
		this.spareBonus(frame);
	}
	else {
	}
};

Game.prototype.calculateTotalScore = function() {
	var score = 0
	this.frames.forEach(function(frame) {
		score += (frame.pinsHit + frame.bonus)
	});
	this.score = score;
};
