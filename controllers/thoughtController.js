const { ObjectId } = require('mongoose').Types;
const { Thought } = require("../models");

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err))
    },
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select("-__v")
            .then(async (thought) =>
                !thought
                    ? res.status(404).json({ message: "No thought with that ID." })
                    : res.json({ thought })
            )
            .catch((err) => {
                console.log(err); 
                return res.status(500).json(err);
            });
    }, 
}