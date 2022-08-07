const { Schema, model } = require('mongoose');
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
            get: formatDate
        },
        username: {
            type: String,
            required: true
        },
        reactions: [{
            type: Schema.Type.ObjectId,
            ref: "reactions"
        }]
    },
    {
        toJSON: {
            virtuals: true,
        }, 
        id: false
    }
);

formatDate = (createdAt) => {
    return moment(createdAt).format("MMM Do, YYYY")
} 

thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

const Thought = model('thoughts', userSchema);

module.exports = Thought;
