var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;
        

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY},
                {type: 'box',x:100,y:200}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        
        for (var e = 0; e < 20; e++){
            var i = 250 + e * 5;
            createSawBlade(i, e * e * 20 + 800);
            
            createBox(400, e * e * e * 50 + 900);
            
            createEnemy(e * 500, 370);
            
            createReword(e* 700, 300);
         
        }

        function createEnemy(x, y) {
            var enemy =  game.createGameItem('enemy',25);
            var redSquare = draw.rect(50,50,'red');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare); 
            enemy.x = x;
            enemy.y = y;
            enemy.velocityX = -1;
            enemy.rotationalVelocity = -10;
            enemy.onPlayerCollision = function() {
                console.log('The enemy has hit Halle');
                game.changeIntegrity(-10);
            };
             enemy.onProjectileCollision = function() {
                console.log('The Halle has hit enemy');
                game.increaseScore(100);
                enemy.fadeOut();
            };
            game.addGameItem(enemy);
        }
        
        
        
          function createReword(x, y) {
            var reword = game.createGameItem('reword', 25);
            var trophy = draw.bitmap('img/troohy.png');
            trophy.x = -50;
            trophy.y = -50;
            reword.addChild(trophy); 
            reword.x = x;
            reword.y = y;
            reword.velocityX = -1;
            reword.onPlayerCollision = function() {
                console.log('Halle Has Goten A Reword');
               game.increaseScore(1000);
            };
      
            game.addGameItem(reword);
        }
        
        
          
   
        
        function createSawBlade(y,x) {
            // your code goes here
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            
            myObstacle.x = x;
            myObstacle.y = y;
            
            game.addGameItem(myObstacle);
            
            var obstacleImage = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(obstacleImage);
            
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }  
        
        
        function createBox(y,x) {
            // your code goes here
            var hitZoneSize = 25;
            var damageFromObstacle = 5
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            
            myObstacle.x = x;
            myObstacle.y = y;

            game.addGameItem(myObstacle);
            
            var obstacleImage = draw.bitmap('img/box.png');
            myObstacle.addChild(obstacleImage);
            
            obstacleImage.x = -75;
            obstacleImage.y = -75;
            
        }

    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}