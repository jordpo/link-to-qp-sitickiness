import Helper from '@ember/component/helper';
import { getOwner } from '@ember/application';

export function hrefTo(context, params) {
  const router = getOwner(context).lookup('service:router');

  if (!router._router || !router._router._routerMicrolib) return '';

  return router.urlFor(...getParamsForGenerateURL(params));
}

function getParamsForGenerateURL(params) {
  params = params.slice(); // Create a copy
  const targetRouteName = params.shift(); // The first param is always the target route name
  const lastParam = params[params.length - 1]; // The last param might be queryParams
  let queryParams;

  if (lastParam && lastParam.isQueryParams) {
    queryParams = params.pop();
    queryParams = queryParams.values;
  } else {
    queryParams = {};
  }

  const models = params; // The remainder are the models

  return [
    targetRouteName,
    ...models,
    { queryParams },
  ];
}

export default Helper.extend({
  compute(params, namedArgs) {
    if (namedArgs.params) {
      return hrefTo(this, namedArgs.params);
    }

    return hrefTo(this, params);
  },
});
