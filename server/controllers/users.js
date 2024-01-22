import mongoose from "mongoose";
import User from '../models/auth.js'
 
export const getallusers = async(req, res) =>{
    try {
        const alluser = await User.find();
        const alluserdetail = []
        alluser.forEach(users =>{
            alluserdetail.push({_id: users._id, name: users.name, about: users.about , tags: users.tags , joinedon: users.joinedon,plan:users.plan,questionsPostedToday:users.questionsPostedToday,lastQuestionPostedDate:users.lastQuestionPostedDate,answered:users.answered,points:users.points,badges:users.badges,logindetails:users.logindetails})
        })
        res.status(200).json(alluserdetail)
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
export const getuserdetail=async (req, res)=>{
    const {id:_id}= req.params; 
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('user unavailable...')
    }
    try {
        const user = await User.findById(_id);
        const userDetails = {
            _id: user._id,
            name: user.name,
            about: user.about,
            tags: user.tags,
            joinedon: user.joinedon,
            plan:user.plan,
            questionsPostedToday:user.questionsPostedToday,
            lastQuestionPostedDate:user.lastQuestionPostedDate,
            logindetails:user.logindetails
          };
        res.status(200).json(userDetails);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}
export const updateprofile = async(req, res)=>{
    const {id:_id}= req.params;
    const {name, about ,tags, plan, questionsPostedToday,lastQuestionPostedDate,answered,badges,points}= req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question unavailable...')
    }
    try {
        const updatedprofile = await User.findByIdAndUpdate(_id,{$set:{'name':name,'about':about,'tags':tags,'plan':plan,'questionsPostedToday':questionsPostedToday,'lastQuestionPostedDate':lastQuestionPostedDate,'answered':answered,'points':points,'badges':badges}},{new: true})
        res.status(200).json(updatedprofile)
    } catch (error) {
        res.status(405).json({message:error.message})
    }
}
export const updatelogin = async(req, res)=>{
    const {id:_id}= req.params;
    const {browser,os,system,ipadd}= req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question unavailable...')
    }
    try {
        const updatedlogin = await User.findByIdAndUpdate(_id,{ $addToSet:{'logindetails':[{ browser,os,system,ipadd}]}})
        res.status(200).json(updatedlogin)
    } catch (error) {
        res.status(405).json({message:error.message})
    }
}