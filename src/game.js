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
    this._totalize(i)
  }
  return this.score;
};

Game.prototype.gutterGame = function() {
  return (this.score === 0 && this.frames[9].stats.roll2Score === 0)
};

Game.prototype.perfectGame = function() {
  return (this.score === 300)
};

Game.prototype._totalize = function(num) {
  this._spareBonus(this.frames[num]);
  this._strikeBonus(this.frames[num]);
  this.score += (this.frames[num].stats.pinsHit + this.frames[num].stats.bonus);
};

Game.prototype._spareBonus = function(frame) {
  if (frame.isSpare()) {
    frame.stats.bonus += this._firstRollBonus(frame);
  }
};

Game.prototype._strikeBonus = function(frame) {
  if (frame.isStrike()) {
    frame.stats.bonus += (this._firstRollBonus(frame) + this._secondRollBonus(frame))
  }
};

Game.prototype._firstRollBonus = function(frame) {
  if (frame.stats.number === 10) {
    return null;
  }
  else {
    return this._nextFrame(frame).stats.roll1Score;
  }
};

Game.prototype._secondRollBonus = function(frame) {
  if (frame.stats.number === 10) {
    return null;
  }
  else {
    return this._nextFrame(frame).stats.roll2Score || this._secondNextFrame(frame).stats.roll1Score;
  }
};

Game.prototype._nextFrame = function(frame) {
  return this.frames[this.frames.indexOf(frame) + 1]
};

Game.prototype._secondNextFrame = function(frame) {
  return this.frames[this.frames.indexOf(frame) + 2]
};

