import Player from '@vimeo/player';
console.log(Player);
const iframe = document.querySelector('iframe');
console.log(iframe);
const player = new Player('handstick', {
    id: 'vimeo-player',
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
});


