function posts() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let string = `${super.toString()}\nRating: ${this.likes - this.dislikes}`;
            if(this.comments.length > 0){
                string += `\nComments:`;
                for (let comment of this.comments) {
                    string += '\n * ' + comment;
                }
            }


            return  string;
        }
    }

    class BlogPost extends Post{
        constructor(title,content,views){
            super(title,content);
            this.views = views;
        }

        view(){
            this.views++;
            return this;
        }

        toString(){
            return `${super.toString()}\nViews: ${this.views}`;
        }
    }

    return {Post,SocialMediaPost,BlogPost};
}

let res = posts();

let post = new res.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new res.SocialMediaPost("TestTitle", "TestContent", 25, 30);

console.log(scm.toString());
let test = new res.BlogPost("TestTitle", "TestContent", 5);

test.view().view().view();

console.log(test.toString());