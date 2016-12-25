import { withPluginApi } from 'discourse/lib/plugin-api';

function initializePlugin(api)
{
  api.onPageChange((url, title) => {
  });
}
export default {
  name: 'Score',
  initialize: function(container)
  {
      withPluginApi('0.1', api => initializePlugin(api));
  }
};
