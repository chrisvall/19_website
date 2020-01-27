import React from 'react'
import './block-textimg.scss'




const TextImg = props => (
    <div className="TextImg">
        <div className="Margin">
             <h3>{props.subtitle}</h3>

            <div className="TextImgGroup"> 
                <div >
                    <h1>{props.title}</h1>
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