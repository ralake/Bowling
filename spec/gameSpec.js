describe('Bowling Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
    game.setupFrames(Frame);
  });

  describe('Frames...', function() {
    it('has 10 frames at the start of the game', function(){
      expect(game.frames.length).toBe(10);
    });
  });

  describe('Basic Scores...', function() {
    it('has a score of zero at the start of the game', function() {
      expect(game.calculateScore()).toBe(0)
    });

    it('keeps a running total', function() {
      game.frames[0].roll1(2);
      game.frames[0].roll2(4);
      game.frames[1].roll1(5);
      game.frames[1].roll2(3);
      expect(game.calculateScore()).toBe(14);
    });
  });

  describe('Spares...', function() {
    it('will add the score of the first roll of the next frame if a player score a spare', function() {
      game.frames[0].roll1(6);
      game.frames[0].roll2(4);
      game.frames[1].roll1(1);
      game.frames[1].roll2(1);
      expect(game.calculateScore()).toBe(13)
    });

    it('will will not add a bonus if a player score a spare and follows with a gutter roll', function() {
      game.frames[0].roll1(6);
      game.frames[0].roll2(4);
      game.frames[1].roll1(0);
      game.frames[1].roll2(0);
      expect(game.calculateScore()).toBe(10);
    });

    it('adds the score of the third roll if the player scores a spare in the tenth frame', function() {
      for(var i = 0; i < 9; i++) {
        game.frames[i].roll1(0);
        game.frames[i].roll2(0);
      }
      game.frames[9].roll1(5);
      game.frames[9].roll2(5);
      game.frames[9].roll3(1);
      expect(game.calculateScore()).toBe(11)
    });
  });

  describe('Strikes...', function() {
    it('adds the next two rolls as a bonus if player scores a strike', function() {
      game.frames[0].roll1(10);
      game.frames[1].roll1(3);
      game.frames[1].roll2(6);
      expect(game.calculateScore()).toBe(28);
    });

    it('adds the next two rolls as a bonus if player scores two strikes in a row', function() {
      game.frames[0].roll1(10);
      game.frames[1].roll1(10);
      game.frames[2].roll1(6);
      game.frames[2].roll2(2);
      expect(game.calculateScore()).toBe(52);
    });

    it('will calculate the correct bonus if the player scores three strikes in a row', function() {
      game.frames[0].roll1(10);
      game.frames[1].roll1(10);
      game.frames[2].roll1(10);
      expect(game.calculateScore()).toBe(60);
    });

    it('adds the score of the two following rolls if the player gets a strike on roll one of frame 10', function() {
      for(var i = 0; i < 9; i++) {
      	game.frames[i].roll1(0);
      	game.frames[i].roll2(0);
      }
      game.frames[9].roll1(10);
      game.frames[9].roll2(10);
      game.frames[9].roll3(10);
      expect(game.calculateScore()).toBe(30)
    });
  });

  describe('Gutter Games and Perfect Games...', function() {
    it('knows if it is a gutter game', function() {
      for(var i = 0; i < 10; i++) {
        game.frames[i].roll1(0);
	game.frames[i].roll2(0);
      }
      game.calculateScore();
      expect(game.gutterGame()).toBe(true);
    });

    it('knows if it is a perfect game', function() {
      for(var i = 0; i < 10; i++) {
	game.frames[i].roll1(10);
      }
      game.frames[9].roll2(10);
      game.frames[9].roll3(10);
      game.calculateScore();
      expect(game.perfectGame()).toBe(true);
    });
  });

});
