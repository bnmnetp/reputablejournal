suite('basic', function() {

  this.timeout(2000);

  var container = document.getElementById('container');
  var items = document.getElementById('items').innerHTML;

  teardown(function () {
    container.innerHTML = '';
  });

  test('default selection', function(done) {
    var fixture = document.createElement('basic-modes');
    fixture.innerHTML = items;
    container.appendChild(fixture);
    flush(function() {
      assert.equal(fixture.selected, 0);
      done();
    });
  });

  test('notap is true', function(done) {
    var fixture = document.createElement('basic-modes');
    fixture.innerHTML = items;
    container.appendChild(fixture);
    flush(function() {
      assert.equal(fixture.notap, true);
      done();
    });
  });

});

