class Game
{
    constructor()
    {

    }
    getState()
    {
        var gamestateRef=database.ref('gameState');
        gamestateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    update(state)
    {
        database.ref("/").update({
            gameState:state
        })
    }
    async start()
    {
        if(gameState===0)
        {
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();
        }
    }
    play()
    {
        form.hide();
        textSize(40);
        text("GAME START",150,50);
        Player.getPlayerInfo();
        if(allPlayers!=undefined)
        {
            var playerPosition=130;
            for(var i in allPlayers)
            {
                if(i==="player"+player.index)
                {
                    fill("red");

                }
                else
                {
                    fill("black");
                }
                playerPosition=playerPosition+20;
                textSize(15);
                text(allPlayers[i].name+" : "+allPlayers[i].distance,120,playerPosition);

            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!=null)
        {
            player.distance+=50;
            player.update();
        }
    }
}