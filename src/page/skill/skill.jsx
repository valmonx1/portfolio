import React from 'react'
import './skill.css'


const Skill = (props) => {
    return (
        <>
            <section id={props.id} className="skill">
                <div className="sentance">
                    <div className="tag-skill">
                        <p className="tag-skill-div">&#60;div&#62;</p>
                        <p className="tag-skill-h1">&#60;h1&#62;</p>
                        <p className="tag-skill-h1-end"> &#60;&#47;h1&#62;</p>
                        <p className="tag-skill-p">&#60;p&#62;</p>
                        <p className="tag-skill-p-end"> &#60;&#47;p&#62;</p>
                        <p className="tag-skill-div-end"> &#60;&#47;div&#62;</p>
                    </div>
                    <div className="header-skill">
                        <h4>Skills &amp; Experience</h4>
                    </div>
                    <div className="skill-sentence">
                        <p>Main area of my expertise is Front-End Development which is client side. I am using HTML, CSS and Javascript to make a website. I also used React JS and React Native framework which i gain this experiece from my final year project at UTeM and Internship at TrackerHero Technology. I did not claim that i good and pro at programming but i will try my best to give a good result.</p>
                    </div>
                    <div className="contain-cup">
                        <div className="cup"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skill