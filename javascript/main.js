var constraints = {
  video: true, 
  audio: false //set to true to enable audio
};

getUserMedia(
  constraints, 
  onMediaStream, 
  noMediaStream
);

function onMediaStream(stream) {
  localVideo = document.getElementById("localVideo");
  
  localStream = stream;
  attachMediaStream(localVideo, stream);
  
  localVideo.play();
}

function noMediaStream (error) {
  console.log("No media stream for us.", error);
}

var ul = document.getElementById("filters"); 

ul.addEventListener("click", function(e) {
  console.log("e: ", e);
  
  var filter = e.target.id;
  
  var filters = {
    "NoFilter": function() {
      console.log("NoFilter");
      localVideo.className = "";
    },
    
    "Willow": function() {
      console.log("Willow");
      localVideo.className = "ig-willow";
    },
    
    "Earlybird": function() {
      console.log("Earlybird");
      localVideo.className = "ig-earlybird";
    },
    
    "Mayfair": function() {
      console.log("Mayfair");
      localVideo.className = "ig-mayfair";
    },
    
    "Amaro": function() {
      console.log("Amaro");
      localVideo.className = "ig-amaro";
    }
  }[filter]();
});
