var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var QuoteSchema = new Schema(
    { 
    content: String,
    likes: {type: Number, default:0},
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    username: String},
    { timestamps: true },
)
mongoose.model("Quote", QuoteSchema);