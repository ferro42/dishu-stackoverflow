import React from 'react'
import Leftsidebar from '../../components/Lesftsidebar/Leftsidebar.jsx'
import Tagslist from './tagslist.jsx'
import './Tags.css'

const tags = () => {
    const taglist=[{
        id:1,
        tagname:"javascript",
        tagdesc:"For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Note that..."
    },{
        id:2,
        tagname:"python",
        tagdesc:"Python is a dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and enforces a..."
    },{
        id:3,
        tagname:"java",
        tagdesc:"Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This..."
    },{
        id:4,
        tagname:"c#",
        tagdesc:"C# (pronounced see sharp) is a high-level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets.."
    },{
        id:5,
        tagname:"php",
        tagdesc:"PHP is an open source, multi-paradigm, dynamically-typed and interpreted scripting language designed initially for server-side web development. Use this..."
    },{
        id:6,
        tagname:"android",
        tagdesc:"Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles,..."
    },{
        id:7,
        tagname:"html",
        tagdesc:"HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser. Questions..."
    },{
        id:8,
        tagname:"jquery",
        tagdesc:"jQuery is a JavaScript library. Consider also adding the JavaScript tag. jQuery is a popular cross-browser JavaScript library that facilitates Document Object..."
    },{
        id:9,
        tagname:"c++",
        tagdesc:"C++ is a general-purpose programming language. Initially, it was designed as an extension to C and has a similar syntax, but it is now a..."
    },{
        id:10,
        tagname:"css",
        tagdesc:"CSS (Cascading Style Sheets) is a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup..."
    },{
        id:11,
        tagname:"ios",
        tagdesc:"iOS is the mobile operating system running on the Apple iPhone, iPod touch, and iPad. Use this tag [ios] for questions related to programming on.."
    },{
        id:12,
        tagname:"sql",
        tagdesc:"Structured Query Language (SQL) is a language for querying databases. Questions should include code examples, table structure, sample data,..."
    }]
  return (
    <div className='home-container-1'>
      <Leftsidebar/>
      <div className='home-container-2'>
        <h1 className='tags-h1'>Tags</h1>
        <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
        <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
        <div className='tags-list-container'>
            {
                taglist.map((tag)=>(
                    <Tagslist tag={tag} key={taglist.id}/>
                ))
            }
        </div>
      </div>
    </div>

  )
}

export default tags;
