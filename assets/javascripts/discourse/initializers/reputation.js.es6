import { withPluginApi } from 'discourse/lib/plugin-api';


function initialize(api, siteSettings) {
}

export default {
  name: 'reputation',

  initialize(container) {
    const siteSettings = container.lookup('site-settings:main');
    const store = container.lookup('store:main');
    withPluginApi('0.1', api => initialize(api, siteSettings));
  }
};
