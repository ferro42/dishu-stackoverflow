import React, { useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import upVote from "../../assets/upvote.png";
import downVote from "../../assets/down.png";
import "./Question.css";
import Avatar from "../../components/Avatar/Avatar";
import Displayanswer from "./Displayanswer";
import { deletequestion, postanswer ,votequestion} from "../../actions/question.js";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { updateprofile } from '../../actions/users'
import copy from "copy-to-clipboard";

const Questiondetail = () => {
  const { id } = useParams();
  const questionslist = useSelector((state) => state.questionreducer);
  const user = useSelector((state) => state.currentuserreducer);
  const User= useSelector((state) => state.current);
  const [answer, setanswer] = useState(" ");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const url = "https://stackoverflowclone-xr0i.onrender.com";
  const [hasDispatched, setHasDispatched] = useState(false);
  
  
  const handlepostans = (e, answerlength) => {
    e.preventDefault();
    
    if (user === null ) {
      alert("Login or Signup to answer a question");
      navigate("/Auth");
    } else {
      if (answer === "") {
        alert("Enter an answer before submitting");
      } else {
       
        dispatch(
          postanswer({
            id,
            noofanswers: answerlength + 1,
            answerbody: answer,
            useranswered: user.result.name,
            userid: user.result._id,
          })
          );
          
          
          
          
      }
    }
  };
  const handleshare = () => {
    copy(url + location.pathname);
    alert("Copied url: " + url + location.pathname);
  };
  const handledelete = () => {
    dispatch(deletequestion(id, navigate));
  };

  
    const handleupvote=()=>{
      if (User === null) {
        alert("Login or Signup to up vote a question");
        navigate("/Auth");
      } else {
        dispatch(votequestion(id, "upVote"));
      }
  }
  const handledownvote=()=>{
    if (User === null) {
      alert("Login or Signup to down vote a question");
      navigate("/Auth");
    } else {
      dispatch(votequestion(id, "downVote"));
    }
    
  }

  return (
    <div className="question-detail-page">
      {questionslist.data === null ? (
        <h1>Loading..</h1>
      ) : (
        <>
          {questionslist.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className="question-detail-container">
                  <h1>{question.questiontitle}</h1>
                  <div className="question-detail-container-2">
                    <div className="question-votes">
                      <img
                        src={upVote}
                        alt="upvote"
                        width="18"
                        className="votes-icon"
                        onClick={handleupvote}
                      />
                      <p>{question.upvote.length - question.downvote.length}</p>
                      <img
                        src={downVote}
                        alt="downvote"
                        width="18"
                        className="votes-icon"
                        onClick={handledownvote}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionbody}</p>
                      <div className="question-detail-tag">
                        {question.questiontags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-action-user">
                        <div>
                          <button type="button" onClick={handleshare}>
                            Share
                          </button>
                          {user?.result?._id === question?.userid && (
                            <button type="button" onClick={handledelete}>
                              Delete
                            </button>
                          )}
                        </div>
                        <div>
                          <p>asked {moment(question.askedon).fromNow()}</p>
                          <Link
                            to={`/Users/${question.userid}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar backgroundColor="orange" px="8px" py="5px">
                              {question.userposted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userposted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noofanswers !== 0 && (
                  <section>
                    <h3>{question.noofanswers} Answers</h3>
                    <Displayanswer
                      key={question._id}
                      question={question}
                      handleshare={handleshare}
                    />
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form
                    onSubmit={(e) => {
                      handlepostans(e, question.answer.length);
                    }}
                  >
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      onChange={(e) => setanswer(e.target.value)}
                    ></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                  <p>
                    Browse other Question tagged
                    {question.questiontags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tag">
                        {" "}
                        {tag}{" "}
                      </Link>
                    ))}{" "}
                    or
                    <Link
                      to="/Askquestion"
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      {" "}
                      ask your own question.
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Questiondetail;
