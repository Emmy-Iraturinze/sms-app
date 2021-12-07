import React, { useState, useEffect } from 'react';


const axios = require('axios').default;

const newPost = {
  'client_id': 'amily-inc',
 'grant_type': 'client_credentials',
 'client_secret': 'be5b11c7-5831-4919-bebf-1729344a725d',
};

const sendPostRequest = async () => {
    try {
        const resp = await axios.post('https://auth.oltranz.com/auth/realms/api/protocol/openid-connect/token', newPost,{

          headers: {
      
            'content-type': 'application/x-www-form-urlencoded'
          }
        });
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

sendPostRequest();

export default sendPostRequest;