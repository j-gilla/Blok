'use strict'

const Spotify = require('spotify-web-api-node');
const queryString = require('query-string');
const express = require('express');
const router = new expres.Router();


//configure the express server
const CLIENT_ID = require('./.config.js');
const CLIENT_SECRET = require('./.config.js');
const REDIRECT_URI = require('./.config.js'); || 'http://localhost:8080/callback';
//application requests authorization
const scopes = ['user-read-private', 'user-read-email'];

// configure spotify
const spotifyApi = new Spotify({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: REDIRECT_URI
});


const generateRandomString = N => (Math.random().toString(36)+Array(N).join('0')).slice(2, N+2);

//login endpoint
router.get('/login', (_, res) => {
  const state = generateRandomString(16);
  res.cookie(STATE_KEY, state);
  res.redirect(spotifyApi.createAuthorizeURL(scopes, state))
});



module.exports = router;
