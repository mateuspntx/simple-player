var audio = $("#br-player")

$("i#play-pause").click(function(){
  if(audio[0].paused) {
        audio[0].play();
          $(this).removeClass("fa fa-play");
          $(this).addClass("fa fa-pause");
    }
    else {
        audio[0].pause();
      $(this).removeClass("fa fa-pause");
      $(this).addClass("fa fa-play");
    }
    return false;
});
$("i#stop").click(function(){
  $("#br-player").trigger('pause');
  $("i#play-pause").removeClass("fa fa-pause");
  $("i#play-pause").addClass("fa fa-play");
  $("#br-player").prop("currentTime",0);
});
audio.on('timeupdate', function() {
		var currentPos = audio[0].currentTime;
		var duration = audio[0].duration;
    var minutes = duration / 60;
    var seconds = duration - (minutes * 60);
		var perc = 100 * currentPos / duration;
		$('.bar').css('width',perc+'%')
    //$('#duration-time').html(minutes +':'+ seconds);
});