import Razorpay from 'razorpay'
import crypto from 'crypto'
import User from '../models/auth.js';
import mongoose from 'mongoose'

const KEYID= process.env.KEYID
const KEYSECRET=process.env.KEYSECRET

 export const orders=(req, res)=>{

    const instance = new Razorpay({ key_id: KEYID, key_secret: KEYSECRET })
    const options={
        amount: req.body.amount * 100,
        currency: "INR",
    };
    instance.orders.create(options, (err, order) => {
        if (err) {
          return res.status(500).json({ code: 500, message: 'server error' });
        }
        return res.status(200).json({ code: 200, message: 'order created', data: order });
      });

};

export const verify=(req, res)=>{
    let body = req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;
    var expectedSignature = crypto.createHmac('sha256',KEYSECRET)
        .update(body.toString())
        .digest('hex');


    if(expectedSignature === req.body.response.razorpay_signature){
        res.send({code: 200, message:'signature valid'})
    }else{
        res.send({code: 500, message:'signature not valid'})
    }
}
