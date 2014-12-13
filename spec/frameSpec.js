describe('Frames', function() {

	var frame;

	beforeEach(function() {
		frame = new Frame;
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