var playlist = {prince: "Kiss"}

function updatePlaylist(playlist, artistName, songTitle){
  playlist.[artistName] = songTitle;
  return playlist;
}