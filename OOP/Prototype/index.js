

function Comment(title, body, username){
    this.title = title;
    this.body = body;
    this.username = username;
    this.createdAt = Date.now();

    console.log(this)
}


Comment.prototype.display = function(){
    return this.title;
}
Comment.prototype.get_username = function(){
    return this.username;
}

const c1 = new Comment("Nice Couse", "I loved that course", "moin1")
const c2 = new Comment("Good Couse", "I liked that course", "user2")