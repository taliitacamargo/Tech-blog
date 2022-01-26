const User = require('./User');
const Posts = require('./Posts');
const Comment = require("./Comment");


Posts.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

Posts.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "CASCADE",
});

Comment.belongsTo(User, {
    foreignKey: "user_id",
})

module.exports = { User, Posts, Comment };
