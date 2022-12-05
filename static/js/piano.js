function play(id) {
  console.log(id);
}

let audioContext = new AudioContext();

//音量,頻率(HZ),秒數,波型(sine/square/sawtooth/trigangle)
function sound(vol, freq, duration, typename) {
  v = audioContext.createOscillator();
  u = audioContext.createGain();
  v.connect(u);
  v.frequency.value = freq; //頻率(HZ)
  v.type = typename; //波型
  u.connect(a.destination);
  u.gain.value = vol * 0.01; //音量
  v.start(a.currentTime);
  v.stop(a.currentTime + duration * 0.001); //秒數
}
