$(document).ready(function () {
    let url = "https://baas.kinvey.com/appdata/kid_S1FMs5dLW";
    let user = "peter";
    let password = "p";
    let auth = btoa(user + ":" + password);
    let authHeader =  { "Authorization": "Basic " + auth };

    $("#btnLoadPosts").click(function () {
        let req = {
            type: "GET",
            url: url + "/posts",
            headers: authHeader
        }

        $.ajax(req).then(function (posts) {
            $("#posts").empty();
            for (let post of posts) {
                let option = $("<option>")
                    .text(post.title)
                    .val(post._id);
                $("#posts").append(option);
            }

        });
    });
    
    $("#btnViewPost").click(function () {
        let id = $("#posts").val();
        if(!id){
            return;
        }
        let reqPost = {
            type: "GET",
            url: url + "/posts/" + id,
            headers: authHeader
        };
        let reqComments = {
            type: "GET",
            url: url + `/comments/?query={"post_id":"${id}"}`,
            headers: authHeader
        };
        $.ajax(reqPost).then(function (post) {
            $("#post-title").text(post.title);
            $("#post-body").text(post.body);
        });

        $.ajax(reqComments).then(function (comments) {
            $("#post-comments").empty();
            for (let comment of comments) {
                $("#post-comments").append($("<li>").text(comment.comment));
            }
        })

    })
});
