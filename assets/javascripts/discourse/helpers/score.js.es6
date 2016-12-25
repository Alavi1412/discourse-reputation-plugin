import { registerUnbound } from 'discourse-common/lib/helpers';
registerUnbound('show', function(params) {
	var target = -1;
	$.ajax({
  url: "users/" + params + "/summary.json",
  dataType: 'json',
  async: false,
  success: function(data) {
  	target = data.user_summary.likes_received;
  }
});
	return new Handlebars.SafeString(target);
});
