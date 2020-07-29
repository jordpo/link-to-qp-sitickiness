import Route from '@ember/routing/route';

export default class PostsRoute extends Route {
  resetController(controller, isExiting) {
    if (isExiting) {
      controller.set('q', '');
    }
  }
}
