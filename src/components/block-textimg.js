import React from 'react'
import './block-textimg.scss'




const TextImg = props => (
    <div className="TextImg">
        <div className="Margin">
            <div className="TextImgGroup">
                
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    <a className="syledLink1" href={props.link} target="_blank" rel="noopener noreferrer"> 
                    {props.linkname}
                    </a>
                </div>
                <img src={props.image} />
            </div>
        </div>
    </div>
)


export default TextImg