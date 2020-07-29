import Controller from '@ember/controller';
import { action, set } from '@ember/object';

export default class ApplicationController extends Controller {
  queryParams = ['q'];

  q = '';

  @action
  reset() {
    set(this, 'q', '');
  }
}
