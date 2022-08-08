const { Schema, Types } = require('mongoose');
const moment = require("moment");



const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // get: formatDate
        }
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }

);

// function formatDate(createdAt) {
//     let date = createdAt.toString();
//     return moment(date).format("MMM Do, YYYY")
// }; 

module.exports = reactionSchema;

