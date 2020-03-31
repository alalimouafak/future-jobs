fetch("POST https://entreprise.pole-emploi.fr/connexion/oauth2/access_token" , {
    method: 'POST',
    headers: {
      "Content-type": "application/x-www-form-urlencoded;",
      "Host": "entreprise.pole-emploi.fr",
      "Accept": "*/*",
    "Content-Length": "326"
    },
    body: "grant_type=client_credentials&client_id=[PAR_futurejob_136378497779aeb3f34e8ff8ed5d74105c30b4e095f3f413d51b3fe808148bd7]&client_secret=[493cc9870379dbf1cc17d968876623d4646d98a2a926749c92ebb1deddb8b969]&scope=application_[PAR_futurejob_136378497779aeb3f34e8ff8ed5d74105c30b4e095f3f413d51b3fe808148bd7]%20api_offresdemploiv2 o2dsoffre"
  })
  .then(res=>res)
  .then(function (data) {
    console.log('Request succeeded with JSON response', data);
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });
