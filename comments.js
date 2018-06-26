var dbconnection = require("./dbconnection");

function getComments() {
    return [{
        id: "2",
        userId: 2,
        comment: "good start"
    },
    {
        id: "3",
        userId: 6,
        comment: "First comment"
    },

    ]

}

function findComment(id) {
    dbconnection.DbConnection.query("select * from comments where id=" + id, function (error, result) {
        if (error) {
            console.log("error fetching data");
        }
        else {
            return JSON.stringify(result);
        }

    });
}
function createComment(newComment) {
    dbconnection.query("Insert into comments(userId, title,body) " +
        "values('" + newComment.userId + "','" + newComment.title + "','" + newComment.body + "')")
}

function deleteComment(id, callback) {
    let now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    dbconnection.query("update comments set deleted_at=" + now, function (error, result) {
        if (error) {
            console.log("deleted comment");
            callback(false)
        }
        callback(true);
    });
}
exports.CreateComment = createComment;
exports.DeleteComment = deleteComment
exports.Comments = getComments;
exports.FindComment = findComment;