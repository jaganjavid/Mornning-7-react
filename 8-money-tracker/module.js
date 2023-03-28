// It is a commonly used Design Pattern which is used to wrap a set of
//  variables and functions together in a single scope.

// (function(name){
//     console.log(name)
// }("jagan"));

const data = (function(){
    const x = 5;

    return {
      getX : function(){
        console.log(x);
      }
    }
}());

const data2 = (function(){
    const x = 10;

    return {
      getX : function(){
        console.log(x);
      }
    }
}());

data.getX()
data2.getX()