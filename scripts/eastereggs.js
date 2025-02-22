let clickCount = 0;
const image = document.getElementById('mypic');
const hat = document.getElementById('hat');

// YouTube API laden
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: '0',
    width: '0',
    videoId: 'bfW6dzCFy2A', // Video-ID von YouTube-Link
    playerVars: { 'autoplay': 0, 'controls': 0 },
  });
}

image.addEventListener('click', () => {
  clickCount++;

  if (clickCount === 5) {
    hat.style.display = 'block'; // Hut anzeigen
    player.playVideo();          // Musik abspielen
  }
});