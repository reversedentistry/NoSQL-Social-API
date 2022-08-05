const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // some kind of email match validation 
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "thoughts"
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "users"
            }
        ]

    }, 
    {
        toJSON: {
            virtuals: true
        }
    }
);

userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

const User = model('users', userSchema);

module.exports = User;
