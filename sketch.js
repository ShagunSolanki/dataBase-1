
var database;
var GameState = 0;
var PlayerCount = 0;
var player,game,form;
var AllPlayer;

function setup(){
    createCanvas(500,500);
    
    database = firebase.database()
    game = new Game()
    game.getState()
    game.Start()

   
}


function draw(){
    background("white");

    if(PlayerCount===4){
        game.update(1)
    }
    
    if(GameState===1){
        clear()
        game.Play()
    }
}

