var assert = chai.assert;

describe('EXAMPLE - Validate JS is working correclty', function() {
  it('an array should start empty', function() {
    var arr = [];
    assert.equal(arr.length, 0);
  });

  it('an array should increment to 1 when added', function() {
    var arr = [2] ;
    assert.equal(arr.length, 1, 'Array length was not 0');
  });
});
