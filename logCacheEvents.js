
function logEvents(e){
	console.log(e);
}

try{
  if (window.applicationCache) { 
    var appCache = window.applicationCache; 
     appCache.addEventListener('error', logEvents, false); 
     appCache.addEventListener('checking', logEvents, false); 
     appCache.addEventListener('noupdate', logEvents, false); 
     appCache.addEventListener('downloading', logEvents, false); 
     appCache.addEventListener('progress', logEvents, false); 
     appCache.addEventListener('updateready', logEvents, false); 
     appCache.addEventListener('cached', logEvents, false); 
  }
}catch(e){
  console.log(e);
}
