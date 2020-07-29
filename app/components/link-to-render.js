import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LinkToRender extends Component {
  @tracked href;

  @action
  grabHref(el) {
    this.href = el.getAttribute('href');
  }
}
