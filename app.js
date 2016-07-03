'use strict';
var args = process.argv.slice(2);

var Robot = require('./models/Robot');
var Input = require('./models/Input');
var TableTop = require('./models/TableTop');

var tableTop  = new TableTop(5, 5);

var robot = new Robot();

if(args.length > 0){
    var commandFileUrl = args[0];
    var input = new Input(commandFileUrl);
    if(input.commands && input.isValidFirstCommand()){
        for(var i = 0; i < input.commands.length; i++){
            var command = input.commands[i];

            switch(input.getCommandWithoutArguments(command)){
                case 'PLACE':
                    var placeArguments = input.getCommandArguments(command);
                    var xPostion = placeArguments[0];
                    var yPostion = placeArguments[1];
                    var facing = placeArguments[2];
                    
                    //Robot is not in the table 
                    if((xPostion >= tableTop.xSize) && (yPostion >= tableTop.ySize)){
                        console.error("Robot position out of table top");
                        return;
                    }

                    robot.place(xPostion, yPostion, facing);
                    break;
                case 'MOVE':
                    robot.move(tableTop);
                    break;
                case 'LEFT':
                case 'RIGHT':
                    robot.rotate(command);
                    break;
                case 'REPORT':
                    console.log("\n\nOutput:" + robot.x + "," + robot.y + "," + robot.facing + "\n\n");
                    break;
                default:
            }
        }
    }
    else{
        console.log("\n\nError: First command should be PLACE command\n\n");
    }
}
else{
    console.log("\n\nError: Missing command file path\n\n");
}