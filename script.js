
function sound(freq, shape, duration) {
    const audioContext = new AudioContext();
    const frequency = freq;
    const time = duration;
    const waveShape = shape;
    const volume = 0.25;
    const oscillator = audioContext.createOscillator();
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.type = waveShape;
    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + time);
}