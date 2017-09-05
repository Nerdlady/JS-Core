let postsService = (() => {
    function loadPosts() {
        // Request teams from db
        return requester.get('appdata', 'posts', 'kinvey');
    }

    function loadMyPosts(username) {
        return requester.get('appdata', `posts?query={"author":"${username}"}`, 'kinvey');
    }

    function loadPostDetails(postId) {
        return requester.get('appdata', 'posts/' + postId, 'kinvey');
    }


    function edit(postId,author, url, title, image, description) {
        let data = {
            author: author,
            url: url,
            title: title,
            description: description,
            imageUrl: image
        };

        return requester.update('appdata', 'posts/' + postId, 'kinvey', data);
    }

    function createPost(author, url, title, image, description) {
        let data = {
            author: author,
            url: url,
            title: title,
            description: description,
            imageUrl: image
        };

        return requester.post('appdata', 'posts', 'kinvey', data);
    }

    function deletePost(postId) {
        return requester.remove('appdata','posts/' + postId,'kinvey')
    }


    return {
        loadPosts,
        loadMyPosts,
        loadPostDetails,
        edit,
        createPost,
        deletePost
    }
})();