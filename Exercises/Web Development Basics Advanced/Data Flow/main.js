const posts = Posts();
const renderer = Renderer();

renderer.renderPosts(posts.getPosts());


$("button").on("click", function() {
    const name = $("#inputName")
    const wish = $("#inputWish")

    posts.addPost({
        name: name.val(),
        text: wish.val()
    })

    name.val("")
    wish.val("")
    renderer.renderPosts(posts.getPosts())
    
})