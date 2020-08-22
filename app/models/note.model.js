const mongoose = require('mongoose');
const NoteSchema = mongoose.Schema({
    title:String,
    content:String
});
NoteSchema.set('toJSON',{versionKey: false,virtuals:true,
    transform:function(doc,ret){delete ret._id}
})

module.exports = mongoose.model('Note',NoteSchema);