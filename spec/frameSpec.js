describe('Frames', function() {

	var frame;

	beforeEach(function() {
		frame = new Frame();
	});

	describe('scores...', function() {

		it('has no score before rolls are recorded', function() {
			expect(frame.roll1Score).toBe(null);
			expect(frame.roll2Score).toBe(null);
			expect(frame.pinsHit).toBe(null);
		});

		it('should record the score of a roll', function() {
			frame.roll1(5);
			expect(frame.roll1Score).toBe(5);
		});

		it('should know the score of both rolls', function() {
			frame.roll1(5);
			frame.roll2(3);
			expect(frame.pinsHit).toBe(8);
		});

		it('should not be able to record more than 10 pins being knocked down in a single roll', function() {
			expect( function(){ frame.roll1(12); }).toThrow(new Error("There are only ten pins"));
		});

		it('should never have more than ten pins hit per frame', function() {
			frame.roll1(6);
			expect( function(){ frame.roll2(8); }).toThrow(new Error("There are only ten pins"));
		});

		it('makes second roll unavailable if a strike is scored on the first roll', function() {
			frame.roll1(10);
			expect( function(){ frame.roll2(1); }).toThrow(new Error("There are only ten pins"));
		});

	});

	describe('strikes and spares...', function() {

		it('should know if it is a spare', function() {
			frame.roll1(5);
			frame.roll2(5);
			expect(frame.isSpare()).toBe(true);
		});

		it('should know if it is not a spare', function() {
			frame.roll1(5);
			frame.roll2(4);
			expect(frame.isSpare()).toBe(false);
		});

		it('should know if it is a strike', function() {
			frame.roll1(10);
			expect(frame.isStrike()).toBe(true);
		});

		it('should know if it is not a strike', function() {
			frame.roll1(2);
			frame.roll2(2);
			expect(frame.isStrike()).toBe(false);
		});

	});

});