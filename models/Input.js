'use strict';

var fs = require('fs');

function Input(fileName){
    try {
        //read commands file
        this.commands = fs.readFileSync(fileName).toString().split("\n");
    } catch (e) {
        if (e.code === 'ENOENT') {
            console.log('File not found!');
        } else {
            throw e;
        }
    }
    
}

/***
 * Check if the first command is PLACE command
 * @returns {boolean}
 */
Input.prototype.isValidFirstCommand = function() {
    var firstCommand = this.commands[0];
    var firstCommandUppercase = firstCommand.toUpperCase();

    var commandDetails = firstCommandUppercase.split(" ");
    if(commandDetails[0] == "PLACE"){
        return true;
    }
    return false;
};

/***
 * Get command
 * @param command
 * @returns {*}
 */
Input.prototype.getCommandWithoutArguments = function(command) {
    if(command.indexOf(" ") == -1){
         return command;
    }
    return command.slice(0, command.indexOf(" "));
};


/***
 *  Get command arguments
 * @param command
 * @returns {Array}
 */
Input.prototype.getCommandArguments = function(command) {
    var spaceIndex = command.indexOf(" ");
    var argumentString = command.slice(spaceIndex);
    var argumentArray =  argumentString.split(",");
    var argumentArrayWithoutSpace =  argumentArray.map(function(s) {return s.trim() });
    return argumentArrayWithoutSpace;
};

//export the class
module.exports = Input;