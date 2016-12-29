import { resulting } from 'discourse/plugins/Discourse-Reputation/discourse/lib/reputation';

export default {
  setupComponent(args, component) {
    component.set('getUsername', resulting(args.user.get('username')));
  }
};
