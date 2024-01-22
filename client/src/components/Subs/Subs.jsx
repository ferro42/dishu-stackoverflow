import React from 'react';
import './Subs.css'
import axios from 'axios'
import { useSelector ,useDispatch} from 'react-redux'
import { updateprofile } from '../../actions/users'

const Subs = () => {
    const currentuser= useSelector((state)=>state.currentuserreducer)  
    const dispatch= useDispatch()
    const checkouthandler=(data)=>{
        let options = {
            key: 'rzp_test_VuCxcg6msfF9CM', 
            amount: data.amount, 
            currency: "INR",
            name: "stack overflow",
            description: "Subscription plan",
            order_id:data.id, 
            callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
            theme: {
                "color": "#ef8236"
            },
            handler:function(response){
                
                axios.post('https://stackoverflowclone-xr0i.onrender.com/users/verify',{ response: response})
                    .then(res=>{
                    if(res.data.code===200){
                    
                    updateplan(data.amount, 'Payment verified');
                    }else{
                        updateplan(data.amount, 'Payment not verified');
                    }
                    })
                    .catch(err=>{
                        console.log(err)
                        
                    })
            }
        };
        const rzp1 = new window.Razorpay(options);
            rzp1.open();
        }

    const handlepayment=(amount)=>{
        const _data={amount:amount}
        axios.post('https://stackoverflowclone-xr0i.onrender.com/users/orders',_data)
        .then(res=>{
            checkouthandler(res.data.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const basicupdate=()=>{
        let planToUpdate= 'basic'
        dispatch(updateprofile(currentuser?.result?._id, { plan: planToUpdate }));
    }
    const updateplan=(amount, paymentStatus)=>{
        let planToUpdate = null; // Declare a variable to store the plan value
        if (amount === 10000 && paymentStatus === "Payment verified") {
        planToUpdate = 'silver';
        } else if (amount === 100000 && paymentStatus === "Payment verified") {
        planToUpdate = 'gold';
        }
        if (planToUpdate != null) {
        dispatch(updateprofile(currentuser?.result?._id, { plan: planToUpdate }));
        }else{
            console.log("error")
        }
        
    }
    
  return (
     
    <div className='divdiv'>
        <h2 className='h1subs'>Subscription Plans</h2>
    <div className='grid'>
    <div className='box basic'>
        <div className='title'>Basic Plan</div>
        <div className='price'><b>₹0 </b>
        <span>per month</span></div>
        <div className="feature">
            <div>1 question per day</div>
        </div>
        <div className="button">
            <button onClick={()=>{basicupdate();}}>Buy</button>
        </div>
    </div>
    <div className='box silver'>
        <div className='title'>Silver Plan</div>
        <div className='price'><b>₹100 </b>
        <span>per month</span></div>
        <div className="feature">
            <div>5 question per day</div>
        </div>
        <div className="button">
            <button onClick={()=>{handlepayment('100');}}>Buy</button>
        </div>
    </div>
    <div className='box gold'>
        <div className='title'>Gold Plan</div>
        <div className='price'><b> ₹1000  </b>
        <span>per month</span></div>
        <div className="feature">
            <div>Unlimited question per day</div>
        </div>
        <div className="button">
            <button onClick={()=>{ handlepayment('1000');}}>Buy</button>
        </div>
    </div>
    </div>
    </div>
    
       
        

        
  );
}

export default Subs
