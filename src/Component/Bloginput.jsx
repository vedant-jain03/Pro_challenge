import React, { useState } from 'react'
import "./bloginput.css"

function Preview({ heading, tags, content }) {
    return (
        <div className="preview">
            {
                (!heading || !tags || !content) ? <h1>Preview here...</h1> :
                    <div className="pre">
                        <h1>{heading}</h1>
                        <div className="outputtags">
                                {
                                    tags.map((item) => (
                                        <span>{item}</span>
                                    ))
                                }
                            </div>
                        <div>
                            <br />
                            {content}
                        </div>
                    </div>
            }
        </div>
    )
}

function Bloginput() {
    const [preview, setpreview] = useState(false);
    const [heading, setheading] = useState('');
    const [tag, settag] = useState();
    const [tags, settags] = useState([]);
    const [content, setcontent] = useState();
    const additem = () => {
        settags((old) => {
            return [...old, tag];
        })
        settag('');
    }
    return (
        <div id="bloginput">
            <div className="header">
                <h3><span>Hash/Hub</span> Create Blog</h3>
                <h2>Hash/Hub BLOGS</h2>
                <button>Publish</button>
            </div>
            <div className="main">
                <div className="nav">
                    <h3 className={preview === false ? "active" : ""} onClick={e => setpreview(false)}>Edit</h3>
                    <h3 className={preview === true ? "active" : ""} onClick={e => setpreview(true)}>Preview</h3>
                </div>
                {
                    preview === false ?
                        <div className="input">
                            <button>Add a cover Image</button>
                            <input className="title" type="text" placeholder="Title of the Post Here..." value={heading} onChange={e => setheading(e.target.value)} />
                            <div className="inputImage">
                                <input type="text" placeholder="Add tags..." value={tag} onChange={e => settag(e.target.value)} />
                                <button onClick={additem}>Add</button>
                            </div>

                            <div className="outputtags">
                                {
                                    tags.map((item) => (
                                        <span>{item}</span>
                                    ))
                                }
                            </div>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Add your content here..." value={content} onChange={e => setcontent(e.target.value)} ></textarea>
                        </div>
                        :
                        <Preview heading={heading} tags={tags} content={content} />
                }
            </div>
        </div>
    )
}

export default Bloginput
