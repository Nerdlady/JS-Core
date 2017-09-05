let commentsService = (() => {
    function loadPostComments(postId) {
        return requester.get('appdata', `comments?query={"postId":"${postId}"}`, 'kinvey');
    }

    function addComment(author, postId, content) {
        let data = {
            author: author,
            postId: postId,
            content: content
        };
        return requester.post('appdata', 'comments', 'kinvey', data)
    }
    
    function deleteComment(commentId) {
        return requester.remove('appdata','comments/' + commentId,'kinvey')
    }

    return {
        loadPostComments,
        addComment,
        deleteComment
    }
})();
