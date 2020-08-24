import React from 'react'
import './card-article.scss'


const CardArticle = props => (
    <div className="CardArticle">
        <a href={props.link} target="_blank" rel="noopener noreferrer" >
            <img src={props.image} />
            {/* <div className="CardArticle-TextContainer">
                <div>
                    <h2 className="bold">ARTICLE</h2>
                    <h2>{props.description}</h2>
                </div>
            </div> */}
        </a>
    </div>
)


export default CardArticle