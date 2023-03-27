const posts = [
    {title:"Post One"},
    {title:"Post Two"},
];

function createPost(post){
    return new Promise(function(reslove, reject){
      setTimeout(function(){
        posts.push(post)

        const error = true;

        if(!error){
            reslove();
        } else{
            reject("Error: Some thing went worng");
        }
      }, 2000)
    })
}


function getPosts(){
    setTimeout(function(){
        let output = "";

        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        })

        document.body.innerHTML = output;
      }, 1000)
}

createPost({title:"Post Three"})
.then(getPosts)
.catch(function(err){
    console.log(err);
})