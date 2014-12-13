describe('Bowling Game', function() {

	var game;
	var frame1;
	var frame2;

	beforeEach(function() {
		game = new Game();
		frame1 = new Frame();
		frame2 = new Frame();
	});

	describe('Frames...', function() {

		it('has no frames at the start of the game', function(){
			expect(game.frames).toEqual([])
		});

		it('can have a frame added to it', function() {
			game.addFrame(frame1);
			expect(game.frames.length).toBe(1);
		});

		it('can have no more than ten frames', function() {
			for(var i = 0; i < 10; i++) {
				game.addFrame(new Frame);
			};
			expect(game.frames.length).toBe(10)
			expect( function(){ game.addFrame(frame1); } ).toThrow(new Error("There are already ten frames"));
		});

	});

	describe('Basic Scores...', function() {

		it('has a score of zero at the start of the game', function() {
			expect(game.score).toBe(0)
		});

		it('adds the score of the frame to the total when the frame is added', function() {
			frame1.roll1(2);
			frame1.roll2(4);
			game.addFrame(frame1)
			expect(game.score).toBe(6);
		});

		it('keeps a running total', function() {
			frame1.roll1(2);
			frame1.roll2(4);
			frame2.roll1(5);
			frame2.roll2(3);
			game.addFrame(frame1)
			game.addFrame(frame2)
			expect(game.score).toBe(14);
		});

	});

	describe('Bonus Scores...', function() {

		it('will add the score of the first roll of the next frame if a player score a spare', function() {
			frame1.roll1(6);
			frame1.roll2(4);
			game.addFrame(frame1)
			frame2.roll1(1);
			frame2.roll2(1);
			game.addFrame(frame2)
			expect(game.score).toBe(13);
		});

	});

});