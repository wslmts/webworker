var ports=[];
self.onconnect=function(conEvent){
   var port=conEvent.ports[0];
    ports.push(port);
    port.postMessage('welcome');
    port.onmessage=function(msgevent){
        ports.forEach(function(e){
            e.postMessage('<li>'+msgevent.data+'</li>')
        })

    }
}
