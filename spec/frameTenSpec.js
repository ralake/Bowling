describe('Frame Ten', function() {

	var frame;

	beforeEach(function() {
		frame = new FrameTen
	});

		it('has only two rolls if the player does not score a spare or a strike', function() {
			frame.roll1(1);
			frame.roll2(1);
			expect( function(){ frame.roll3(1); }).toThrow(new Error("You are not allowed a third roll"));
		});

		it('has an extra roll if the player scores a spare in the first two rolls', function() {
			frame.roll1(6);
			frame.roll2(4);
			frame.roll3(1);
			expect(frame.pinsHit).toBe(11)
		});

		it('has an extra two rolls if the player scores a strike on the first roll', function() {
			frame.roll1(10);
			frame.roll2(10);
			frame.roll3(10);
			expect(frame.pinsHit).toBe(30);
		});

});