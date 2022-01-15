const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
       
        description: {
          type: DataTypes.STRING,
        },
    
        post_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'post',
            key: 'id',
          },
        },
      },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
      }
    );
    
    module.exports = Comment;
    
