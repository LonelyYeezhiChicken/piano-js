/** 播放 */
let play = _.throttle((id) => {
  console.log(id);
  switch (id) {
    case "do":
      sound(500, 262, 250, "sine");
      break;
    case "re":
      sound(500, 294, 250, "sine");
      break;
    case "me":
      sound(500, 330, 250, "sine");
      break;
    case "fa":
      sound(500, 349, 250, "sine");
      break;
    case "so":
      sound(500, 392, 250, "sine");
      break;
    case "la":
      sound(500, 440, 250, "sine");
      break;
    case "si":
      sound(500, 494, 250, "sine");
      break;
    case "high-do":
      sound(500, 523, 250, "sine");
      break;
  }
}, 255);

function highPlay(id) {
  switch (id) {
    case "do-re":
      sound(500, 277, 250, "sine");
      break;
    case "re-me":
      sound(500, 311, 250, "sine");
      break;
    case "fa-so":
      sound(500, 369, 250, "sine");
      break;
    case "so-la":
      sound(500, 415, 250, "sine");
      break;
    case "la-si":
      sound(500, 466, 250, "sine");
      break;
  }
}

let audioContext = new AudioContext();

//音量,頻率(HZ),秒數,波型(sine/square/sawtooth/trigangle)
function sound(vol, freq, duration, typename) {
  v = audioContext.createOscillator();
  u = audioContext.createGain();
  v.connect(u);
  v.frequency.value = freq; //頻率(HZ)
  v.type = typename; //波型
  u.connect(audioContext.destination);
  u.gain.value = vol * 0.01; //音量
  v.start(audioContext.currentTime);
  v.stop(audioContext.currentTime + duration * 0.001); //秒數
}
