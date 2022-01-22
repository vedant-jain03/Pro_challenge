import React from 'react'
import "./homepage.css"


function Card({ src }) {
    return (
        <>
            <div className="blog-card">
                <h4 className='level'>Intermediate</h4>
                <div className="down">
                    <h2>This is blog Heading</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro consequatur saepe, veritatis error perferendis repellendus libero dignissimos beatae facere aperiam!</p>
                    <div className="tags">
                        <span>React</span>
                        <span>HTML</span>
                        <span>CSS</span>
                    </div>
                    <a href="#">Read More</a>
                </div>
                
            </div>
        </>
    )
}
function Homepage() {
    return (
        <div id="blog">
            <div className="main">
                <div className="search_div">
                    <h1>Pro Challenge</h1>
                    <h2>Search a project Challenge!</h2>
                    <div className="search_wrapper">
                        <input type="text" />
                        <button>Search</button>
                    </div>
                </div>
                <div className="filteration">
                    <div className="">
                        <label for="level_selection">Choose Level:</label>

                        <select name="level_selection" id="level_selection">
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </div>
                </div>
                <div className="left">
                    <Card src="https://cdn.dribbble.com/users/1094631/screenshots/15491024/media/bd73e5ca7a4daae5f4ccb7696cccd8cd.jpg?compress=1&resize=1200x900" />
                    <Card src="https://cdn.dribbble.com/users/758684/screenshots/8103584/media/23791eb14159597c6ef0f81ec60f4d34.jpg?compress=1&resize=1200x900" />
                    <Card src="https://cdn.dribbble.com/users/1094631/screenshots/15491024/media/bd73e5ca7a4daae5f4ccb7696cccd8cd.jpg?compress=1&resize=1200x900" />
                    <Card src="https://cdn.dribbble.com/users/1094631/screenshots/15491024/media/bd73e5ca7a4daae5f4ccb7696cccd8cd.jpg?compress=1&resize=1200x900" />
                    <Card src="https://cdn.dribbble.com/users/1094631/screenshots/15491024/media/bd73e5ca7a4daae5f4ccb7696cccd8cd.jpg?compress=1&resize=1200x900" />
                    <Card src="https://cdn.dribbble.com/users/1094631/screenshots/15491024/media/bd73e5ca7a4daae5f4ccb7696cccd8cd.jpg?compress=1&resize=1200x900" />
                </div>
            </div>
        </div>
    )
}

export default Homepage;