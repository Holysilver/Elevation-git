const Renderer = function() {
    
    function renderPosts(posts) {
        const postList = $("#posts-list");
        postList.empty();

        for (const post of posts){
            const newPostLi = $(`<li>${post.name}: ${post.text}</li>`);
            postList.append(newPostLi);
        }
        
        return{
            renderPosts,
        }
        
    }
}


const posts = Posts();
const renderer = Renderer();

renderer.renderPosts();