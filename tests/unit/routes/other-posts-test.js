import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | other-posts', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:other-posts');
    assert.ok(route);
  });
});
