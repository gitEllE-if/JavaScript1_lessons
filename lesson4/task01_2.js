'use strict';
// Lesson4_1_2

alert("ЗАДАНИЕ 1_2. ES5 vs ES6");

// ES5 -------------------------------------------------------------------
{
    function Post(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    Post.prototype.edit = function (str) {
        this.text = str;
    }

    function AttachedPost(author, text, date) {
        Post.call(this, author, text, date);
        this.highlighted = false;
    }

    AttachedPost.prototype = Object.create(Post.prototype);
    AttachedPost.prototype.constructor = AttachedPost;

    AttachedPost.prototype.makeTextHighlighted = function () {
        this.highlighted = true;
    }

    let post1 = new Post("author1", "text1", "12-01-2020");
    post1.edit("new edited text");

    let attachedPost1 = new AttachedPost("author2", "text2", "12-01-2020");
    attachedPost1.edit("new edited text");
    attachedPost1.makeTextHighlighted();
}

// ES6 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
{
    class Post {
        constructor(author, text, date) {
            this.author = author;
            this.text = text;
            this.date = date;
        }

        edit(str) {
            this.text = str;
        }
    }

    class AttachedPost extends Post {
        constructor(author, text, date) {
            super(author, text, date);
            this.highlighted = false;
        }

        makeTextHighlighted() {
            this.highlighted = true;
        }
    }

    let post1 = new Post("author1", "text1", "12-01-2020");
    post1.edit("new edited text");

    let attachedPost1 = new AttachedPost("author2", "text2", "12-01-2020");
    attachedPost1.edit("new edited text");
    attachedPost1.makeTextHighlighted();
}

document.getElementById("myDiv").innerHTML += "ЗАДАНИЕ 1_2 завершено<br><br>";