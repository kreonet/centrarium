BASE_DOMAIN="eduroam.kreonet.kr";
SECOND_DOMAIN="eduroam.kreonet.net";

if(document.location.href.includes(SECOND_DOMAIN)){
  document.location.href = document.location.href.replace(SECOND_DOMAIN,BASE_DOMAIN);
}
