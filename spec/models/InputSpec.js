describe("Input", function() {
  var Input = require('../../models/Input');
  var input;
  var filePath = "testdata/commands_1.txt";


  beforeEach(function() {
    input = new Input(filePath);
  });

  it("Should have 3 instructions", function() {
    expect(input.commands.length).toEqual(3);
  });

  it("Should contain place command", function() {
    var command = 'PLACE 0,0,NORTH';
    expect(input.commands).toContain(command);
  });

  it("Should have PLACE as first command", function() {
    expect(input.isValidFirstCommand()).toBeTruly;
  });

  describe("Invalid  command", function() {
    beforeEach(function() {
        var newFilePath = "testdata/commands_4.txt";
        input = new Input(filePath);
    });
    it("Should not have PLACE as first command", function() {
        expect(input.isValidFirstCommand()).toBeFalsy;
    });
  });

  it("Should get command without arguments", function() {
    var command = 'PLACE 0,0,NORTH';
    expect(input.getCommandWithoutArguments(command)).toEqual('PLACE');
  });

  it("Should get command", function() {
    var command = 'REPORT';
    expect(input.getCommandWithoutArguments(command)).toEqual('REPORT');
  });

  it("Should get command arguments", function() {
    var command = 'PLACE 0,0,NORTH';
    expect(input.getCommandArguments(command)).toEqual([ '0', '0', 'NORTH' ]);
  });
});