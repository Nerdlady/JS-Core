$(() => {

    const app = Sammy('#app', function () {
        this.use('Handlebars', 'hbs');
        Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
            return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
        });

        this.get('index.html', home.loadHome);
        this.get('#/home', home.loadHome);

        this.post("#/register", userSession.register);

        this.post("#/login", userSession.login);

        this.get("#/logout", userSession.logout);

        this.get("#/catalog", postsSession.loadPosts);

        this.get("#/post/details/:id", postsSession.loadPost);

        this.post("#/comment/create/:postId", postsSession.addCommentToPost);

        this.get("#/comments/delete/:id",postsSession.deleteCommentFromPost);

        this.get('#/posts/create',postsSession.loadCreatePostPage);
        this.post('#/posts/create',postsSession.createPost);

        this.get('#/post/edit/:id',postsSession.loadEditPostPage);
        this.post('#/post/edit/:id',postsSession.editPost);

        this.get('#/post/delete/:id',postsSession.deletePost)

        this.get("#/posts/my",postsSession.myPosts)

        this.get('#/about',about.about)
    });

    app.run();
});