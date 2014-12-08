function debug(msg){
 var log = document.getElementById("debuglog");
 console.log(log);
 if(!log){
   log = document.createElement("div");
   log.id = "debuglog";
   log.innerHTML = "<h1>Debug Log</h1>"
   document.body.appendChild(log);
   console.log(log.innerHTML);
 }
 var pre = document.createElement("pre");
 var text = document.createTextNode(msg);
 pre.appendChild(text);
 log.appendChild(pre);
 console.log(log);
}