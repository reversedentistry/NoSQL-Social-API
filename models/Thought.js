const { Schema, model } = require('mongoose');
const reactionSchema = require("./Reaction");
const moment = require("moment")

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // get: formatDate
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
        }, 
        id: false
    }
);

// formatDate = (createdAt) => {
//     const date = createdAt.toString();
//     return moment(date).format("MMM Do, YYYY")
// } 

thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

const Thought = model('thoughts', thoughtSchema);

module.exports = Thought;
