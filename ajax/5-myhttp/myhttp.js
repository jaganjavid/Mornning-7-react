function myHttp(){
    this.http = new XMLHttpRequest();
}

// Make An HTTP GET REQUEST

myHttp.prototype.get = function(url, callback){
    this.http.open("GET", url, true);

    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200){
            callback(self.http.responseText);
        } 
    }

    this.http.send();
}


// var obj = {
//     run: function(){
//         console.log(this);
//         var self = this;
//         function innerRun(){
//            console.log(self);
//         }
//         innerRun();
//     }
// }

// obj.run();