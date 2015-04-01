describe("string.format", function () {
  var result;

  it("format by index", function () {
    result = 'I\'m {0}. I\'m {1}.'.format('leornado', '30');
    expect(result).toBe('I\'m leornado. I\'m 30.');
  });

  it("format by json object", function () {
    result = 'I\'m {name}. I\'m {age}.'.format({name: 'leornado', age: 30});
    expect(result).toBe('I\'m leornado. I\'m 30.');
  });

  it("format by json object contains quots", function () {
    result = 'Hello! {name}.'.format({name: 'I\'m "LEORNADO"'});
    expect(result).toBe('Hello! I\'m "LEORNADO".');
  });

});
