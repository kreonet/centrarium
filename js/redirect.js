BASE_DOMAIN="eduroam.kreonet.kr";
SECOND_DOMAIN="eduroam.kreonet.net";

if(document.location.href.includes(SECOND_DOMAIN)){
  document.location.href = document.location.href.replace(SECOND_DOMAIN,BASE_DOMAIN);
}

BASE_DIR="";

function change_lang(){
  ORIGIN = document.location.hostname + (document.location.port ? ':' + document.location.port: '') + BASE_DIR;
  if(document.location.href.includes(ORIGIN+"/en")){
    document.location.href = document.location.href.replace(ORIGIN+"/en",ORIGIN);
  }else{
    document.location.href = document.location.href.replace(ORIGIN,ORIGIN+"/en");
  }
}
