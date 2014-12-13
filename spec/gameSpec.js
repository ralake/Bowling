describe('Bowling Game', function() {

	var game;
	var frame;

	beforeEach(function() {
		game = new Game();
		frame = new Frame();
	});

	describe('Frames...', function() {

		it('has no frames at the start of the game', function(){
			expect(game.frames).toEqual([])
		});

		it('can have a frame added to it', function() {
			game.addFrame(frame);
			expect(game.frames.length).toBe(1);
		});

	});

	describe('Scores...', function() {

	});

});