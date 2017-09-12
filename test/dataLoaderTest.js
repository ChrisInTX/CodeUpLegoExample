
// Retrieves data entry from backend system for displaying Wait List
describe('Waiting List', function() {
  it('it can be retrieved from database', function() {

    var list = retrieveSuckerCountOnWaitList();
    assert.equal(list, 1);
  });
});
