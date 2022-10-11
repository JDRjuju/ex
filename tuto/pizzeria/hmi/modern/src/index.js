import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import 'animate.css';

// eslint-disable-next-line no-unused-vars
import { Navbar } from 'bootstrap';

const body = document.querySelector('body');

body.addEventListener('click', startOrStopSound);

function startOrStopSound() {
  const myAudioPlayer = document.querySelector('#audioPlayer');

  if (myAudioPlayer.paused) myAudioPlayer.play();
  else myAudioPlayer.pause();
}
