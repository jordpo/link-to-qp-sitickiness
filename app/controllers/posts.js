import Controller from '@ember/controller';

export default class PostsController extends Controller {
  queryParams = ['q'];

  q = '';
}
