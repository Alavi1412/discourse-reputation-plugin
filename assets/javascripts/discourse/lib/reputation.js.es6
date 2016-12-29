export function resulting(username) {
  var target;
  	$.ajax({
  url: "/users/"+ username +"/summary.json" ,
  dataType: 'json',
  async: false,
  success: function(data) {
  	target = data.user_summary.likes_received;
  }
});
  return target;
}
