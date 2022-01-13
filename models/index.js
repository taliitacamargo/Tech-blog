const User = require('./User');
const Posts = require('./Posts');
const Comment = require("./Comment");


User.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: 'CASCADE',
})

User.hasMany(Posts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Posts.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Posts.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "CASCADE",
});

Comment.belongsTo(Posts, {
    foreignKey: "post_id",
})
Comment.belongsTo(User, {
    foreignKey: "user_id",
})

module.exports = { User, Posts, Comment };
