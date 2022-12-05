function play(id) {
  console.log(id);
  switch (id) {
    case "do":
      sound(500, 262, 500, "sine");
      break;
    case "re":
      sound(500, 294, 500, "sine");
      break;
    case "me":
      sound(500, 330, 500, "sine");
      break;
    case "fa":
      sound(500, 349, 500, "sine");
      break;
    case "so":
      sound(500, 392, 500, "sine");
      break;
    case "la":
      sound(500, 440, 500, "sine");
      break;
    case "si":
      sound(500, 494, 500, "sine");
      break;
    case "high-do":
      sound(500, 523, 500, "sine");
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
