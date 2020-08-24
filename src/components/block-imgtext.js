import React from 'react'
import './block-imgtext.scss'
import Headline3 from "../components/headline3"





const ImgText = props => (
    <div className="ImgText">
            <div className="ImgTextGroup">
                <img src={props.image} />
                <div>
                    <Headline3 number = {props.number} subline = {props.subline}></Headline3>
                    <p>
                    I’ve worked internationally, in-house, and remotely on projects for leading brands, agencies, and startups. I care deeply about creating well thought through and aesthetic products. I can be as involved in your project as you need me to be: from first ideas to sketches, wireframes, prototyping, and front-end tweaking.
 <br></br><br></br>
        
                    Besides client projects,  I teach  coding classes for children and work on 
                    my passion project: creating an online UX/UI short course, to be released soon. I also write about <a class="styledLink1" target="blank" href="https://medium.com/@christinevallaure">Design & Code on Medium</a>. <br></br><br></br>
                    For more information about me please visit my <a class="styledLink1" target="blank" href="https://www.linkedin.com/in/christinevallaure/">LinkedIn page</a>.  
                    </p>
                </div>
            </div>
    </div>
)

      
export default ImgText