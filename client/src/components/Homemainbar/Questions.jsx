import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'

const Questions = ({questions}) => {

  return (
    <div className='display-question-container'>
        <div className='display-votes-ans'>
            <p>{questions.upvote.length - questions.downvote.length}</p>
            <p>votes</p>
        </div>
        <div className='display-votes-ans'>
            <p>{questions.noofanswers}</p>
            <p>answers</p>
        </div>
        <div className='display-question-details'>
            <Link to={`/Questions/${questions._id}`} className='question-title-link'>{questions.questiontitle}</Link>
            <div className='display-tags-time'>
                <div className='display-tags'>
                    {
                        questions.questiontags.map((tag)=>(
                            <p key={tag}>{tag}</p>
                        ))
                    }
                </div>
                <p className='display-time'>
                    asked {moment(questions.askedon).fromNow()} {questions.userposted}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Questions
