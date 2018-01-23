var assert = require("chai").assert;
var luhn = require("../lib/luhn");

describe("Luhn Algorithm", function() {
  it("should return true if a number passes the test", function() {
    var num = 4837575600855946;
    var result = luhn(num);
    assert.isTrue(result);
  });

  it("should return true if a number passes the test", function() {
    var num = 4529904724097;
    assert.isTrue(luhn(num));
  });

  it("should return false if a number passes the test", function() {
    var num = 8273498273423;
    assert.isFalse(luhn(num));
  });

  it("should return false if a number passes the test", function() {
    var num = 1231231;
    assert.isFalse(luhn(num));
  });
});


