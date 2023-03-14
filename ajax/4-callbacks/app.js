const posts = [
    {title:"Post One"},
    {title:"Post Two"},
];

// sync

// function createPost(post){
//     setTimeout(function(){
//         posts.push(post)
//     },2000);
// }


// function getPost(){
//     setTimeout(function(){
//        let output = '';

//        posts.forEach(function(post){
//         output += `<li>${post.title}</li>`;
//        })
//        document.body.innerHTML = output;
//     },1000);
// }


// createPost({title:"Post Three"});

// getPost();

// Async

function createPost(post, callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    },2000);
}

function getPosts(){
    setTimeout(function(){
       let output = '';

       posts.forEach(function(post){
        output += `<li>${post.title}</li>`;
       })
       document.body.innerHTML = output;
    },1000);
}

createPost({title:"Post Three"}, getPosts)




