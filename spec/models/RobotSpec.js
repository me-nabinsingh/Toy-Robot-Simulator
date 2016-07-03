describe("Robot", function() {
  var Robot = require('../../models/Robot');
  var TableTop = require('../../models/TableTop');
  var tableTop;
  var robot;

  beforeEach(function() {
    robot = new Robot();
    tableTop = new TableTop(5, 5);
  });

  describe("When robot is placed within boundry facing south", function() {
        var xPosition = 3;
        var yPosition = 2;
        var facing = "SOUTH";

        beforeEach(function() {
            robot.place(xPosition, yPosition, facing);
        });

        it("should place the robot on tableTop", function() {
            expect(robot.x).toEqual(3);
            expect(robot.y).toEqual(2);
            expect(robot.facing).toBe("SOUTH");
        });

        
        it("should move one step south", function() {
            robot.move(tableTop);

            expect(robot.x).toEqual(3);
            expect(robot.y).toEqual(1);
            expect(robot.facing).toBe("SOUTH");
        });

        it("should not exceed the tabletop bounds", function() {
            robot.move(tableTop);
            robot.move(tableTop);

            expect(robot.x).toEqual(3);
            expect(robot.y).toEqual(0);
            expect(robot.facing).toBe("SOUTH");
        });

        it("should face to east", function() {
            robot.rotate("LEFT");

            expect(robot.facing).toBe("EAST");
        });

        it("should face to west", function() {
            robot.rotate("RIGHT");

            expect(robot.facing).toBe("WEST");
        });
  });

  describe("When robot is placed within boundry facing north", function() {
        var xPosition = 1;
        var yPosition = 3;
        var facing = "NORTH";

        beforeEach(function() {
            robot.place(xPosition, yPosition, facing);
        });

        it("should place the robot on tableTop", function() {
            expect(robot.x).toEqual(1);
            expect(robot.y).toEqual(3);
            expect(robot.facing).toBe("NORTH");
        });

        
        it("should move two steps north", function() {
            robot.move(tableTop);
            robot.move(tableTop);

            expect(robot.x).toEqual(1);
            expect(robot.y).toEqual(4);
            expect(robot.facing).toBe("NORTH");
        });

        it("should not exceed the tabletop bounds", function() {
            robot.move(tableTop);
            robot.move(tableTop);

            expect(robot.x).toEqual(1);
            expect(robot.y).toEqual(4);
            expect(robot.facing).toBe("NORTH");
        });

        it("should face to west", function() {
            robot.rotate("LEFT");

            expect(robot.facing).toBe("WEST");
        });

        it("should face to east", function() {
            robot.rotate("RIGHT");

            expect(robot.facing).toBe("EAST");
        });
  });


  describe("When robot is placed within boundry facing east", function() {
        var xPosition = 1;
        var yPosition = 2;
        var facing = "EAST";

        beforeEach(function() {
            robot.place(xPosition, yPosition, facing);
        });

        it("should place the robot on tableTop", function() {
            expect(robot.x).toEqual(1);
            expect(robot.y).toEqual(2);
            expect(robot.facing).toBe("EAST");
        });

        
        it("should move two steps east", function() {
            robot.move(tableTop);
            robot.move(tableTop);

            expect(robot.x).toEqual(3);
            expect(robot.y).toEqual(2);
            expect(robot.facing).toBe("EAST");
        });

        it("should not exceed the tabletop bounds", function() {
            robot.move(tableTop);
            robot.move(tableTop);
            robot.move(tableTop);
            robot.move(tableTop);

            expect(robot.x).toEqual(4);
            expect(robot.y).toEqual(2);
            expect(robot.facing).toBe("EAST");
        });

        it("should face to north", function() {
            robot.rotate("LEFT");

            expect(robot.facing).toBe("NORTH");
        });

        it("should face to south", function() {
            robot.rotate("RIGHT");

            expect(robot.facing).toBe("SOUTH");
        });
  });


  describe("When robot is placed within boundry facing west", function() {
        var xPosition = 4;
        var yPosition = 4;
        var facing = "WEST";

        beforeEach(function() {
            robot.place(xPosition, yPosition, facing);
        });

        it("should place the robot on tableTop", function() {
            expect(robot.x).toEqual(4);
            expect(robot.y).toEqual(4);
            expect(robot.facing).toBe("WEST");
        });

        
        it("should move two steps east", function() {
            robot.move(tableTop);
            robot.move(tableTop);

            expect(robot.x).toEqual(2);
            expect(robot.y).toEqual(4);
            expect(robot.facing).toBe("WEST");
        });

        it("should not exceed the tabletop bounds", function() {
            robot.move(tableTop);
            robot.move(tableTop);
            robot.move(tableTop);
            robot.move(tableTop);

            expect(robot.x).toEqual(0);
            expect(robot.y).toEqual(4);
            expect(robot.facing).toBe("WEST");
        });

        it("should face to south", function() {
            robot.rotate("LEFT");

            expect(robot.facing).toBe("SOUTH");
        });

        it("should face to north", function() {
            robot.rotate("RIGHT");

            expect(robot.facing).toBe("NORTH");
        });
  });

});