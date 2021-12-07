import React, { useState, useEffect } from 'react';




import Keycloak from 'keycloak-js';



const App = (props) => {


    const [keycloak, setKeycloak] = useState(null);
  	const [authenticated, setAuthenticated] = useState(false);



	 
    useEffect(() => { 

   
        

    const keycloak = new Keycloak({
        url: process.env.REACT_APP_KEYCLOAK_URL,
        realm: process.env.REACT_APP_KEYCLOAK_REALM,
        clientId : process.env.REACT_APP_KEYCLOAK_CLIENT_ID
    });
    keycloak.init({ onLoad: 'login-required' }).then(
        Authenticated => {
        setKeycloak(keycloak);
        setAuthenticated(Authenticated)  
     
    }
    );
    },[]);
    



    if(keycloak) {
            if(authenticated){

                // This is the method to update access token.                
                keycloak.updateToken(300).then(function(refreshed) {
                        if (refreshed) {
                           // console.log('Token was successfully refreshed')  
                        } else {
                           console.log('Token is still valid');
                        }
                    }).catch(function() {
                        keycloak.logout();
                        //console.log('Failed to refresh token or the session has expired');
                    });

                return (    
                            
                            <div>
                <h3>Congratulations, Now you have a valid token. Go ahead and refer to this code sample to create your own sms app</h3>
                        </div>
                    );
        }else
            return (
            <div>404 Authorization failed</div>
            );  
    }else{
        return (
            <div>initialization...</div>
          );
    }
}

export default App;
