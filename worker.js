var list=[
    'tom','cat','call','green','time'
];
self.onmessage=function(e){
   var reg=new RegExp(e.data,'i'),html='';
    list.forEach(function(user){
      if(reg.test(user)){
          html+='<li>'+user+"</li>"
      }
    });
    self.postMessage(html);
}
