var playlist = {prince: "Kiss"};

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song;
  return playlist;
}