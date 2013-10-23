function quickMap(arr,func){
    var len = arr.length;
    if(!len){
        return [];
    }
 var i = -1;
 var out = new Array(len);
 while(++i<len){
     out[i]=func(arr[i]);
 }
 return out;
}
module.exports = quickMap;
