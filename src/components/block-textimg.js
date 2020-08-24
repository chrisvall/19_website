import React from 'react'
import './block-textimg.scss'
import Headline3 from "../components/headline3"



const TextImg = props => (
    <div className="TextImg">

            <div className="TextImgGroup"> 
                <div >
                <Headline3 number = {props.number} subline = {props.subline}></Headline3>
                    {<p>{props.description}</p> /* //make list item */}
                    <p>{props.description2}</p>
                </div>
                <img src={props.image} />
            </div>

      
    </div>
)

export default TextImg