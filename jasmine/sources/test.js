describe("Fizz Buzz", function(){

    var game;

	beforeEach(function () {
		game = new FizzBuzz();
	});

    it("numero igual a tres deve retornar fizz", function(){
        expect(game.init(3)).toEqual("fizz");
    });

});
