const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a job title']
    },
    department: {
        type: String,
        required: [true, 'Please add a department']
    },
    type: {
        type: String,
        enum: ['Full-time', 'Contract', 'Freelance', 'Part-time'],
        default: 'Full-time'
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    experience: {
        type: String,
        required: [true, 'Please add experience level']
    },
    location: {
        type: String,
        required: [true, 'Please add a location']
    },
    deadline: {
        type: Date
    },
    skills: {
        type: [String],
        default: []
    },
    status: {
        type: String,
        enum: ['Open', 'Closed', 'On Hold'],
        default: 'Open'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Job', jobSchema);
