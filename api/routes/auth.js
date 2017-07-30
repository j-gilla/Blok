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

router.get('/login', (_, res) => {
  const state = generateRandomString(16);
  res.cookie(STATE_KEY, state);
  res.redirect(spotifyApi.createAuthorizeURL(scopes, state))
});

router.get('/callback', (req, res) => {
  const { code, state } = req.query;
  const storedState = req.cookies ? req.cookies[STATE_KEY] : null;
  //first do state validation
  if(state === null || !== storedState){
    res.redirect('/#/error/state mismatch');
    //if state valid, get auth code and pass onto client
  }else {
    res.clearCookie(STATE_KEY);
    //retrive access token and refresh token
    spotifyApi.authorizationCodeGrant(code).then(data => {

      const { expires_in, access_token, refresh_token } = data.body;
      //Ste the acces toekn on the API object in later calls
      spotifyApi.setAccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);

      spotifyApi.getMe().then(({ body }) =>{
        console.log(body);
      });

      res.redirect(`/#/user/${access_token}/{$refresh_token}`);
    }).cath(err =>{
      res.redirect('/#/error/invalid token');
    });
  }
});

module.exports = auth;
