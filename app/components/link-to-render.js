import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class LinkToRender extends Component {
  @service router;
  @tracked href;

  @action
  grabHref(el) {
    this.href = el.getAttribute('href');
  }
}
