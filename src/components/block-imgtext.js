import React from 'react'
import './block-imgtext.scss'




const ImgText = props => (
    <div className="ImgText">
        <div className="Margin">
            <div className="ImgTextGroup">
                <img src={props.image} />
                <div>
                    <p>{props.description}</p>
                    <a className="syledLink1" href={props.link} target="_blank" rel="noopener noreferrer"> 
                    {props.linkname}
                    </a>
                </div>
            </div>
        </div>
    </div>
)


export default ImgText