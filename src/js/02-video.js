import Player from '@vimeo/player';
console.log(Player);
const iframe = document.querySelector('iframe');
console.log(iframe);
const player = new Player(iframe);
const currentTime = localStorage.getItem('player_current_time');
player.on('timeupdate', onplay);
player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

function onplay({seconds}) {
    console.log(seconds);
    localStorage.setItem('player_current_time', JSON.stringify(seconds));
}



