const spotifyApi = new Spotify({
  client_id: 3db36df28f45414287727dc2445f088d;
  client_secret: 4147695daf76423b9fa1fca73d44f5bd;
  redirectUri: "http://localhost:8080/callback";
});
module.exports = spotifyApi;
