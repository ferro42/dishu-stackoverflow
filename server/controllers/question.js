import question from '../models/question.js';
import mongoose from 'mongoose';

export const askquestion = async(req, res)=> {
    
    const  postquestiondata = req.body;
    const postquestion = new question(postquestiondata);
    try {
        await postquestion.save();
        res.status(200).json("Posted a question successfully")
    } catch (error) {
        console.log(error)
        res.status(200).json("Couldn't post a new question")
    }
}

export const getallquestion = async(req, res) =>{
    try {
        const questionlist = await question.find();
        res.status(200).json(questionlist);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}


export const deletequestion = async(req, res)=>{
    const {id:_id}= req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question unavailable...')
    }
    try {
        await question.findByIdAndRemove(_id);
        res.status(200).json({message: "successfully deleted.."})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const votequestion = async(req, res) =>{
    const {id: _id }= req.params;
    const {value, userid}= req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question unavailable...')
    }
    try {
        const questions = await question.findById(_id)
        const upindex= questions.upvote.findIndex((id)=> id === String(userid))
        const downindex= questions.downvote.findIndex((id)=> id === String(userid))
        
        if(value === 'upvote'){
            if(downindex !== -1){
                questions.downvote=questions.downvote.filter((id)=> id !== String(userid ))
            }
            if(upindex === -1){
                questions.upvote.push(userid)
            }else{
                questions.upvote = questions.upvote.filter((id)=> id !== String(userid))
            }
        }
        else if(value === 'downvote'){
            if(upindex !== -1){
                questions.upvote=questions.upvote.filter((id)=> id !== String(userid ))
            }
            if(downindex === -1){
                questions.downvote.push(userid)
            }else{
                questions.downvote = questions.downvote.filter((id)=> id !== String(userid))
            }
        }
        await question.findByIdAndUpdate(_id, questions)
        res.status(200).json({message: "voted successfully..."})
    } catch (error) {
        res.status(400).json({message: "id not found"})
    }
}
