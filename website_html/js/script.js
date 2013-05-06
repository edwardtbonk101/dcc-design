
function resize(){
   var maxHeight = -1;
   var $meetingTitles = $('li h2');
   $meetingTitles.removeAttr('style');

   $meetingTitles.each(function() {
     maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
   });

   $meetingTitles.each(function() {
     $(this).height(maxHeight);
   });
}

function getTweets(){
  var c = new Chirp({
    target: 'tweet_container',
    user:'DaytonCleanCode',
    max:2,
    templates: {
        base: '<ul class="chirp">{{tweets}}</ul>',
        tweet: '<li><p><a href="http://twitter.com/{{user.screen_name}}" title="{{user.name}} — {{user.description}}"></a> {{html}}</p></li>'
      },
    success: function( data ){
      document.getElementById('tweets').style.display = 'block';
    }
  });
  c.show();
}

$(document).ready(function($) {
  resize();
  getTweets();
  $(window).resize($.throttle(250, resize));
});