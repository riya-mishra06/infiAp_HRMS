const mongoose = require('mongoose');

const PolicySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a policy title'],
        trim: true,
        maxlength: [100, 'Title cannot be more than 100 characters']
    },
    author: {
        type: String,
        required: [true, 'Please add an author name']
    },
    department: {
        type: String,
        required: [true, 'Please associate a department']
    },
    status: {
        type: String,
        enum: ['Confidential', 'Compliance', 'Internal', 'Public'],
        default: 'Internal'
    },
    category: {
        type: String,
        default: 'General'
    },
    description: {
        type: String,
        default: ''
    },
    filePath: {
        type: String,
        default: '/mock/url/document.pdf' // Simulated for now
    },
    size: {
        type: String,
        default: '1.0 MB'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Policy', PolicySchema);
