window.addEventListener('keydown',function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;  
  audio.play();
  key.classList.add('playing');
  setTimeout(function(){
    key.classList.remove('playing')
  },100)
})
function kick(){
  var audio = document.querySelector(`audio[data-key="65"]`);
  var key = document.querySelector(`audio[data-key="65"]`);
  if(!audio) return;
  audio.currentTime = 0;  
  audio.play();
  key.classList.add('playing');
  setTimeout(function(){
    key.classList.remove('playing')
  },100)
}
function clap(){
  var audio = document.querySelector(`audio[data-key="83"]`);
  var key = document.querySelector(`audio[data-key="83"]`);
  if(!audio) return;
  audio.currentTime = 0;  
  audio.play();
  key.classList.add('playing');
  setTimeout(function(){
    key.classList.remove('playing')
  },100)
}
function hit(){
  var audio = document.querySelector(`audio[data-key="68"]`);
  var key = document.querySelector(`audio[data-key="68"]`);
  if(!audio) return;
  audio.currentTime = 0;  
  audio.play();
  key.classList.add('playing');
  setTimeout(function(){
    key.classList.remove('playing')
  },100)
}
function snare(){
  var audio = document.querySelector(`audio[data-key="70"]`);
  var key = document.querySelector(`audio[data-key="70"]`);
  if(!audio) return;
  audio.currentTime = 0;  
  audio.play();
  key.classList.add('playing');
  setTimeout(function(){
    key.classList.remove('playing')
  },100)
}
