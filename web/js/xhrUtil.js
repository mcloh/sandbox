/********************************************
   JSON file functions     
 ********************************************/

/* -----------------------------------------
_xhrGetJSON("path/to/file.json",function(err,res){
    if(err) doSomethingWith(err);
    if(res) doSomethingWith(res);
})
*/
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

/* -----------------------------------------
jsonGet({
    url: "path/to/file.json",
    success: function(res){
        doSomethingWith(res);
    },
    error: function(data){
        doSomethingWith(err);
    }
})
*/
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

/********************************************
   Dynamic HTML functions     
 ********************************************/

/* -----------------------------------------
let myNewElement = createNewElement({
    tag: "div || span || img || input || a || whatever",
    parent: parentElement || parentElement.id || parentElement.class,
    class: "whatever css classnames",
    id: "someUniqueId",
    src: "source/if/applicable",
    type: "type/if/applicable",
    anyother: "anyOtherAttributeValue"
})
*/
var createNewElement = function(params){
    var el = document.createElement(params.tag);
    if(!!params.parent) {
        if(typeof params.parent === 'object') params.parent.append(el);
        else document.querySelector(params.parent).append(el);
    }
    if(!!params.class) el.classList.add(params.class);
    for(var k in params){
        if(k!=='tag' && k!=='parent' && k!=='class' && !k.trim) el[k] = params[k];
    }
    return el;
}

