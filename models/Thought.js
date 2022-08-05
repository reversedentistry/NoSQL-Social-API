const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1, 
            maxLength: 280
        }, 
        createdAt: {
            // current timestamp
            // getter
        },
        username: {
            type: String,
            required: true
        }, 
        reactions: [{ 
            type: Schema.Type.ObjectId,
            ref: "reactions"
        }]
    }
)