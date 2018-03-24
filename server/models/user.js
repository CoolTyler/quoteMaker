var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema(
    { 
    name: String,
    quotes: [{type: Schema.Types.ObjectId, ref: 'Quote'}]
    },
    
    { timestamps: true },
)

// var QuoteSchema = new Schema(
//     { 
//     content: String,
//     likes: Number,
//     quote_by: String,
// },
//     { timestamps: true },
// )
// mongoose.model("Quote", QuoteSchema);
mongoose.model("User", UserSchema);