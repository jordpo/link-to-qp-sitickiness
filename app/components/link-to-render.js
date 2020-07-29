import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { getOwner } from '@ember/application';
import { computed } from '@ember/object';
import { next } from '@ember/runloop';

export default class LinkToRender extends Component {
  @service router;
  @tracked href;

  get postsController() {
    return getOwner(this).lookup('controller:posts');
  }


  @computed('postsController.q')
  get q() {
    const postsController = getOwner(this).lookup('controller:posts');
    return postsController.q;
  }

  @action
  grabHref(el) {
    next(this, function() {
      this.href = el.getAttribute('href');
    });
  }
}
