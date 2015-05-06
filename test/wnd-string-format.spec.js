'use strict';
describe('string.format', function () {
  var result;

  it('format by index', function () {
    result = 'I\'m {0}. I\'m {1}.'.format('leornado', '30');
    expect(result).toBe('I\'m leornado. I\'m 30.');

    result = '{0}{1}{2}{3}{4}{5}{6}{7}{8}{9}{10}{11}{1}{2}'.format([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    expect(result).toBe('0123456789101112');

    result = '{0}{1}'.format([0, 1], 'string');
    expect(result).toBe('0,1string');
  });

  it('format by json object', function () {
    result = 'I\'m {name}. I\'m {age}.'.format({name: 'leornado', age: 30});
    expect(result).toBe('I\'m leornado. I\'m 30.');

    result = 'I\'m {0}.'.format({name: 'leornado', age: 30});
    expect(result).toBe('I\'m {"name":"leornado","age":30}.');
  });

  it('format by json object contains quots', function () {
    result = 'Hello! {name}.'.format({name: 'I\'m "LEORNADO"'});
    expect(result).toBe('Hello! I\'m "LEORNADO".');
  });

  it('format by undefined/null', function () {
    result = '{0}'.format(undefined);
    expect(result).toBe('{0}');

    result = '{0}'.format(undefined, undefined);
    expect(result).toBe('{0}');

    result = '{0}'.format([undefined, undefined]);
    expect(result).toBe('{0}');

    result = '{0}'.format(null);
    expect(result).toBe('null');

    result = '{name}'.format(null);
    expect(result).toBe('{name}');

    result = '{name}'.format({name: undefined});
    expect(result).toBe('{name}');

    result = '{name}'.format({name: null});
    expect(result).toBe('null');
  });

});
