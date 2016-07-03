describe("TableTop", function() {
  var TableTop = require('../../models/TableTop');
  var tableTop;

  beforeEach(function() {
    tableTop = new TableTop(5, 5);
  });

  it("Should have 5 by 5 dimension", function() {
    expect(tableTop.xSize).toEqual(5);
    expect(tableTop.ySize).toEqual(5);
  });
});