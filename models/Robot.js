'use strict';


function Robot(){

}

/***
 * Place the robot on table top
 * @param xPosition
 * @param yPosition
 * @param facing
 * @param tableTop
 */
Robot.prototype.place = function(xPosition, yPosition, facing) {
    this.x = parseInt(xPosition);
    this.y = parseInt(yPosition);
    this.facing = facing;
};

/***
 * Move one position inside table top
 * @param tableTop
 */
Robot.prototype.move = function(tableTop) {
   var facing = this.facing;
   switch(facing){
       case 'NORTH':
            if(this.y < (tableTop.ySize - 1)){
                this.y += 1; 
            }
            break;
       case 'SOUTH':
            if(this.y > 0){
                this.y -= 1; 
            }
            break;
       case 'EAST':
            if(this.x < (tableTop.xSize - 1)){
                this.x += 1; 
            }
            break;
       case 'WEST':
            if(this.x > 0){
                this.x -= 1; 
            }
            break;
   }
};


/***
 * change the facing 90degrees
 * @param newFacing
 */
Robot.prototype.rotate = function(newFacing) {
   switch(this.facing){
       case 'NORTH':
            this.facing = (newFacing == 'LEFT')?'WEST':'EAST';
            break;
       case 'SOUTH':
            this.facing = (newFacing == 'LEFT')?'EAST':'WEST';
            break;
       case 'EAST':
            this.facing = (newFacing == 'LEFT')?'NORTH':'SOUTH';
            break;
       case 'WEST':
            this.facing = (newFacing == 'LEFT')?'SOUTH':'NORTH';
            break;
   }
};


//export the class
module.exports = Robot;