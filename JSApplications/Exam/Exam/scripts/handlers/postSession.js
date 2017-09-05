let postsSession = (() => {
    function loadPosts(ctx) {
        userSession.redirectUser(ctx);
        postsService.loadPosts()
            .then(function (posts) {
                ctx.loggedIn = auth.getUserId();
                ctx.posts = posts;
                ctx.username = auth.getUsername();

                for (let obj of posts) {
                    obj.timeCreated = calcTime(obj._kmd.ect)
                }
                ctx.loadPartials({
                    header: "./templates/common/header.hbs",
                    footer: "./templates/common/footer.hbs",
                    post: "./templates/catalog/post.hbs",
                    controls: "./templates/catalog/controls.hbs",
                    menu: "./templates/menu/menu.hbs"

                }).then(function () {
                    this.partial("./templates/catalog/catalog.hbs")
                })
            })
            .catch(notifications.handleError);

    }

    function loadPost(ctx) {
        userSession.redirectUser(ctx);
        postsService.loadPostDetails(ctx.params.id)
            .then(function (post) {
                ctx.loggedIn = auth.getUserId();
                ctx.post = post;
                ctx.username = auth.getUsername();
                commentsService.loadPostComments(ctx.params.id).then(function (comments) {
                    ctx.comments = comments;
                    ctx.loadPartials({
                        header: "./templates/common/header.hbs",
                        footer: "./templates/common/footer.hbs",
                        commentSection: "./templates/comments/commentSection.hbs",
                        commentForm: "./templates/comments/commentForm.hbs",
                        comment: "./templates/comments/comment.hbs",
                        menu: "./templates/menu/menu.hbs"

                    }).then(function () {
                        ctx.partials = this.partials;
                        ctx.partial("./templates/details/details.hbs")
                    })

                }).catch(notifications.handleError);

            }).catch(notifications.handleError);
    }

    function addCommentToPost(ctx) {
        userSession.redirectUser(ctx);
        commentsService.addComment(auth.getUsername(), ctx.params.postId, ctx.params.content)
            .then(function () {
                notifications.showInfo('Comment created.');
                $('#createCommentForm').empty();
                ctx.redirect('#/post/details/' + ctx.params.postId)
            }).catch(notifications.handleError);
    }

    function deleteCommentFromPost(ctx) {
        userSession.redirectUser(ctx);
        commentsService.deleteComment(ctx.params.id)
            .then(function () {
                notifications.showInfo('Comment delete.');
                window.history.go(-1);
            }).catch(notifications.handleError);
    }

    function loadCreatePostPage(ctx) {
        userSession.redirectUser(ctx);
        ctx.loggedIn = auth.getUserId();
        ctx.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs",
            createForm: "./templates/create/createForm.hbs",
            menu: "./templates/menu/menu.hbs"

        }).then(function () {
            ctx.partials = this.partials;
            ctx.partial("./templates/create/createPage.hbs")
        })
    }

    function createPost(ctx) {
        userSession.redirectUser(ctx);
        let url = ctx.params.url;
        let title = ctx.params.title;
        if (!url || !url.startsWith('http')) {
            notifications.showError('Link url should start with “http”')
            return;
        }

        if (!title) {
            notifications.showError('Title can not be empty');
            return;
        }
        postsService.createPost(auth.getUsername(), url, title, ctx.params.image, ctx.params.description)
            .then(function () {
                notifications.showInfo('Post created.');
                ctx.redirect('#/catalog');
            }).catch(notifications.handleError);

    }

    function loadEditPostPage(ctx) {
        userSession.redirectUser(ctx);
        postsService.loadPostDetails(ctx.params.id)
            .then(function (post) {
                ctx.loggedIn = auth.getUserId();
                ctx.post = post;
                ctx.loadPartials({
                    header: "./templates/common/header.hbs",
                    footer: "./templates/common/footer.hbs",
                    editForm: "./templates/edit/editForm.hbs",
                    menu: "./templates/menu/menu.hbs"

                }).then(function () {
                    ctx.partials = this.partials;
                    ctx.partial("./templates/edit/editPage.hbs")
                })
            })
    }

    function editPost(ctx) {
        userSession.redirectUser(ctx);
        let url = ctx.params.url;
        let title = ctx.params.title;
        if (!url || !url.startsWith('http')) {
            notifications.showError('Link url should start with “http”')
            return;
        }

        if (!title) {
            notifications.showError('Title can not be empty');
            return;
        }
        postsService.edit(ctx.params.id,auth.getUsername(), url, title, ctx.params.image, ctx.params.description)
            .then(function () {
                notifications.showInfo(`Post ${title} updated.`);
                ctx.redirect('#/catalog');
            }).catch(notifications.handleError);
    }

    function deletePost(ctx) {
        userSession.redirectUser(ctx);
        postsService.deletePost(ctx.params.id)
            .then(function () {
                notifications.showInfo('Post deleted.')
                ctx.redirect('#/catalog');
            }).catch(notifications.handleError);
    }

    function myPosts(ctx) {
        userSession.redirectUser(ctx);
        postsService.loadMyPosts(auth.getUsername())
            .then(function (posts) {
                ctx.loggedIn = auth.getUserId();
                ctx.posts = posts;
                ctx.username = auth.getUsername();

                for (let obj of posts) {
                    obj.timeCreated = calcTime(obj._kmd.ect)
                }
                ctx.loadPartials({
                    header: "./templates/common/header.hbs",
                    footer: "./templates/common/footer.hbs",
                    post: "./templates/catalog/post.hbs",
                    controls: "./templates/catalog/controls.hbs",
                    menu: "./templates/menu/menu.hbs"

                }).then(function () {
                    this.partial("./templates/catalog/catalog.hbs")
                })
            })
            .catch(notifications.handleError);
    }

    function calcTime(dateIsoFormat) {
        let diff = new Date - (new Date(dateIsoFormat));
        diff = Math.floor(diff / 60000);
        if (diff < 1) return 'less than a minute';
        if (diff < 60) return diff + ' minute' + pluralize(diff);
        diff = Math.floor(diff / 60);
        if (diff < 24) return diff + ' hour' + pluralize(diff);
        diff = Math.floor(diff / 24);
        if (diff < 30) return diff + ' day' + pluralize(diff);
        diff = Math.floor(diff / 30);
        if (diff < 12) return diff + ' month' + pluralize(diff);
        diff = Math.floor(diff / 12);
        return diff + ' year' + pluralize(diff);

        function pluralize(value) {
            if (value !== 1) return 's';
            else return '';
        }
    }


    return {
        loadPosts,
        loadPost,
        addCommentToPost,
        deleteCommentFromPost,
        createPost,
        loadCreatePostPage,
        loadEditPostPage,
        editPost,
        deletePost,
        myPosts
    }

})();
