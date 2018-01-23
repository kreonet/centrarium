BASE_DIR="/sample";

function change_lang(){
  ORIGIN = document.location.hostname + (document.location.port ? ':' + document.location.port: '') + BASE_DIR;
  if(document.location.href.includes(ORIGIN+"/en")){
    document.location.href = document.location.href.replace(ORIGIN+"/en",ORIGIN);
  }else{
    document.location.href = document.location.href.replace(ORIGIN,ORIGIN+"/en");
  }
}
