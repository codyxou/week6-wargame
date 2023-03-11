

 

let expect = chai.expect;

describe('Function Tests', function(){
    describe('#timeForWar', function(){
        it('should confirm that a new player is created with the given name', function() {
             let testPlayer = new Player('Test Player');
   
            console.log(`Player Name: ${testPlayer}`); 
            expect(testPlayer.players).to.equal('Test Player');
        });
            
    });
  
});