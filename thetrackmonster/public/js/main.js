var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    scrollParent: true,
    hideScrollbar: true,
    progressColor: '#42b983',
    waveColor: '#f5f5f5',
    barRadius: 50,
    cursorColor: '#fff'
});
wavesurfer.load('http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');
wavesurfer.on('ready', function () {
    wavesurfer.play();
});
