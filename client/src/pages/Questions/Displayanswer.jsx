import React from 'react'
import {Link, useParams} from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'
import moment from 'moment'
import { useSelector , useDispatch} from 'react-redux'
import {deleteanswer} from '../../actions/question.js'

const Displayanswer = ({question, handleshare}) => {
const user = useSelector((state) => state.currentuserreducer);
const { id } = useParams();
const dispatch = useDispatch();
const handledelete =(answerid, noofanswers)=>{
    dispatch(deleteanswer(id,answerid, noofanswers - 1))
}

  return (
    <div>
        {
            question.answer.map((ans)=>(
                <div className='display-ans' key={ans._id}>
                    <p>{ans.answerbody}</p>
                    <div className ='question-action-user'>
                        <div>
                            <button type ="button" onClick={handleshare}>Share</button>
                            {
                                user?.result?._id === question?.userid &&(
                                <button type="button" onClick={()=>handledelete(ans._id, question.noofanswers)}>Delete</button>
                            )
                          }
                        </div>
                        <div>   
                            <p>Answered {moment(ans.answeredon).fromNow()}</p>
                            <Link to={`/Users/${ans.userid}`}className='user-link' style={{color:'#0086d8'}}>
                                <Avatar backgroundColor="green" px='8px' py='5px'>{ans.useranswered.charAt(0).toUpperCase()}</Avatar>
                                <div>
                                    {ans.useranswered}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Displayanswer
