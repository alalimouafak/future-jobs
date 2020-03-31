var myHeaders = new Headers();
myHeaders.append("Content-type", "application/x-www-form-urlencoded");
myHeaders.append("Content-Type", "text/plain");
var bodyy = "grant_type=client_credentials&client_id=PAR_futurejobs2_6195762ee13d2b607fa002bc9bed2e5b1c6b695e631f7403b6a08a8b8f3005ce&client_secret=31abcdfb6685a1b367d04b3047650e88d83863eeb43546e0185e65adf69c1860&scope=application_PAR_futurejobs2_6195762ee13d2b607fa002bc9bed2e5b1c6b695e631f7403b6a08a8b8f3005ce%20api_offresdemploiv2 o2dsoffre";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: bodyy,
  redirect: 'follow'
};

fetch("https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=partenaire", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
