var _xhrGetJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

var jsonGet = function(parms){
   _xhrGetJSON(parms.url, function(err,res){
     if (err !== null) {
       if(!parms.error) console.log(err);
       else parms.error(err)
     } else {
       if(!parms.success) console.log(res);
       else parms.success(res);
     }      
   });
}
