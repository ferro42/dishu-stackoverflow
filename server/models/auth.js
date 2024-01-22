import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    about: {type: String},
    tags: {type: [String]},
    plan:{type:String,enum:['basic','silver','gold'],default:'basic'},
    answered:{type: Number, default:0},
    joinedon: {type: Date, default: Date.now},
    lastQuestionPostedDate: {type: Date, default:Date.now},
    questionsPostedToday: {type: Number, default:0},
    badges: {type: Number, default:0},
    points:{type: Number, default:0},
    logindetails:[{
        browser:String,
        os:String,
        system:String,
        ipadd:String,
    }]
})

export default mongoose.model('User', userSchema)