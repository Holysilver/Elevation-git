const Posts = function() {
    const _posts = [ 
        {name:"Uncle", text:"Hapy birthday!"},
        {name:"BFF", text:"Hapy birthday darling!"},
        {name:"Teacher", text:"Hay ace, have a good one"}
    ];

    function addPost(post) {
        _posts.push(post);
    }

    function getPosts() {
        return [..._posts];
    }

    return{
        addPost,
        getPosts
    }
}