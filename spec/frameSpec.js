describe('Frames', function() {

  var frame;
  var frame10;

  beforeEach(function() {		
    frame = new Frame(1);
    frame10 = new Frame(10);
  });

  describe('identifiers', function() {
    it('knows its number', function() {
      expect(frame.stats.number).toBe(1);
    });
  });

	describe('scores...', function() {
		it('has no score before rolls are recorded', function() {
			expect(frame.stats.roll1Score).toBe(null);
			expect(frame.stats.roll2Score).toBe(null);
			expect(frame.stats.pinsHit).toBe(null);
		});

		it('should record the score of a roll', function() {
			frame.roll1(5);
			expect(frame.stats.roll1Score).toBe(5);
		});

		it('should know the score of both rolls', function() {
			frame.roll1(5);
			frame.roll2(3);
			expect(frame.stats.pinsHit).toBe(8);
		});

		it('should not be able to record more than 10 pins being knocked down in a single roll', function() {
			expect( function(){ frame.roll1(12); }).toThrow(new Error("There are only ten pins"));
		});

		it('should never have more than ten pins hit per frame (unless frame ten)', function() {
			frame.roll1(6);
			expect( function(){ frame.roll2(8); }).toThrow(new Error("There are only ten pins"));
		});

		it('makes second roll unavailable if a strike is scored on the first roll (unless frame ten)', function() {
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

	describe('Frame Ten...', function() {
		it('is not allowed a third roll if the player does not score and spare or strike', function() {
			frame10.roll1(1);
			frame10.roll2(2);
			expect( function(){ frame10.roll3(1); }).toThrow(new Error("You are not allowed a third roll"));
		});

		it('allows a third roll if the player scores a spare', function() {
			frame10.roll1(4);
			frame10.roll2(6);
			frame10.roll3(2);
			expect(frame10.stats.pinsHit).toBe(12)
		});

		it('allows a third roll if the player scores a strike', function() {
			frame10.roll1(10);
			frame10.roll2(10);
			frame10.roll3(10);
			expect(frame10.stats.pinsHit).toBe(30)
		});
	});

});
