/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count=0;
  var new_arr = [];
    for (var i = 0; i < preferences.length; i++) {

    var x=preferences[i];
    var y =preferences[x-1];
    var z =preferences[y-1];
    var w =preferences[z-1];

    if(x==w){
      new_arr.push(x, y, z);
    }
    
    new_arr.sort();
    var e = new_arr.length;
    while (e--) {
        if (new_arr[e] == new_arr[e-1]) {
            new_arr.splice(e, 1);
            count = Math.floor(new_arr.length/3);
        }
      }
    }
    return count;
};