// console.log("hello js")
// fetch('https://api.emploi-store.fr/partenaire/offresdemploi')
//     .then(response => response.json())
//     .then(response=>console.log(response))
// let url = 'https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=partenaire';

fetch( 'POST https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=partenaire', {
    method: 'POST',
    headers: {
      "Content-type": "application/x-www-form-urlencoded;",
    },
    body: "grant_type=client_credentials&client_id=PAR_futurejob_136378497779aeb3f34e8ff8ed5d74105c30b4e095f3f413d51b3fe808148bd7&client_secret=493cc9870379dbf1cc17d968876623d4646d98a2a926749c92ebb1deddb8b969&scope=application_PAR_futurejob_136378497779aeb3f34e8ff8ed5d74105c30b4e095f3f413d51b3fe808148bd7 "
  })
  .then(res=>res)
  .then(function (data) {
    console.log('Request succeeded with JSON response', data);
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });

  /**
 * Authentification pour récupérer un access token
 */
 
// fetch('https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=partenaire', {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//     },
//     body: 
//         "grant_type=client_credentials&client_id=PAR_futurjob_098bed1ac2e807766266ac805812e68dc7289ee64d1f2137614490656e30e53a&client_secret=0019f2eaffc65b6265f00552f88b3728fa5322b8b9fa12a8247df299b1edcd05&scope=api_offresdemploiv2 application_PAR_futurjob_098bed1ac2e807766266ac805812e68dc7289ee64d1f2137614490656e30e53a o2dsoffre"
// })
// .then(res => res.json())
// .then(function(data ){
//     console.log(data)
// })
