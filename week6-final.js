
/*
classes
    players
    card
    deck

properties

Suits
    card
        value
        suit
        face

players
    each player gets half the deck
//deck object

//actions
 -each player draws a card
 -determine a winner, no changes if there's a tie
 -award a point to the winner
 -declare a total winner at the end, or tie.


*/


class Card {
    constructor(suit, face, value){
    this.suit = suit;
    this.value = value;
    this.face = face;
    }
    
}


class Player{
    constructor(players){
        this.players = players;
        this.hand = [];
    }

}



class Deck {
    constructor(){
        this.wholeDeck = this.makeDeck();
        
    }
    

    makeDeck(){
       
        let values = [2,3,4,5,6,7,8,9,10,"J", "Q", "K", "A"];
        let suits = ['club', 'heart', 'spade', 'diamond']; 
        let deckOfCards = [];
        //loop to iterate through both arrays and create each card value for each suit. 
        for (let x= 0; x < values.length; x++){
            for (let s = 0; s< suits.length; s++){
                 let card = new Card(suits[s], values[x], x+2);
                 deckOfCards.push(card);
            }
         }
         deckOfCards = deckOfCards.sort(() => Math.random() - 0.5);
         return deckOfCards;
        }
    
    distributeDeck(player){
        // console.log('checking', player.hand); used this console log to determine 
        //player parameter created within method to attach to hand which was declared in class player. 
        player.hand = this.wholeDeck.splice(0,26);
        // console.log(player);
    }

}
//instantiate classes
let deckCheck = new Deck();
let player1 = new Player('Player 1');
let player2 = new Player('player 2');

//splitting the deck to both players
deckCheck.distributeDeck(player1);
deckCheck.distributeDeck(player2);
//checks to make sure deck was built correctly and each player got half the deck. 


//game function
//loop checks each players hand and runs each if condition for value. 
//console logged information that tells the Face that each player plays, and put in some logic to determine the winner. Score is increased for the winning player and updated after each round.
const timeForWar = () => {

    player1Score= 0;
    player2Score= 0;
    let round = 0;

    for (let i = 0; i < player1.hand.length; i++){

        if (player1.hand[i].value > player2.hand[i].value){
            console.log(`Player 1 Plays ${player1.hand[i].face}. Player 2 plays ${player2.hand[i].face}. Player 1 wins this round!`);
            round++;
            player1Score +=1;
            console.log(`Round: ${round} | Score: P1: ${player1Score}  P2: ${player2Score}`);

        } else if (player2.hand[i].value > player1.hand[i].value){
            console.log(`Player 2 Plays ${player2.hand[i].face}. Player 1 plays ${player1.hand[i].face}. Player 2 wins this round!`);
            round++;
            player2Score +=1;
            console.log(`Round: ${round} | Score: P1: ${player1Score}  P2: ${player2Score}`);

        }else {console.log('Tie');
        round++;
        console.log(`Round: ${round} | Score: P1: ${player1Score}  P2: ${player2Score}`);

            }
        }
        //Overall winner logic
        if(player1Score > player2Score){

            alert (`Player 1 Wins! Final score P1: ${player1Score} P2: ${player2Score}`);

        }else if(player1Score < player2Score){

            alert(`Player 2 Wins! Final score P1: ${player1Score} P2: ${player2Score}`);

        } else alert('We have a tie!');
}
//activate the game
timeForWar();






