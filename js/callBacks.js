


var pictureSource;
var destinationType; 
var sourceInfo; 
var ID;

var constraints = {
    audio: {
      optional: [{sourceId: audioSource}]
    },
    video: {
      optional: [{sourceId: videoSource}]
    }
  };


function onDeviceReady() {

	navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
	var vid = document.getElementById('video');
	
	if(navigator.getUserMedia) {
		alert(' in getUserMedia' );


		navigator.getUserMedia(	{ video: {  optional: [{sourceId: ID}] } }, 

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

function gotSources(sourceInfos)
{
    for (var i = 0; i < sourceInfos.length; i++)
    {
        var sourceInfo = sourceInfos[i];

        if (sourceInfo.facing == 'environment')
        {
            ID = sourceInfo.id;
            alert(ID);

        }
    }

    onDeviceReady();
}



