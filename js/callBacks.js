


var pictureSource;
var destinationType; 
var sourceInfo; 

function onDeviceReady() {

	navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
	var vid = document.getElementById('video');
	
	if(navigator.getUserMedia) {

		navigator.getUserMedia(	{video: true}, 
		
				function (stream) {
					
					alert(' no chaman' );
					vid.src = window.URL.createObjectURL(stream);
					vid.play();
				}, 

				function (errBack) {
					alert('chaman' + errBack.name);
				} 
		) ;
	
	}
	else {

		alert('no browser support! Go HOme!');
	}



}



