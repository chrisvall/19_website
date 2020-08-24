import React from 'react'
import './headline3.scss'



const headline3 = props => (
    <div class="headline3 row">
        <h2 class="block bold">{props.number}</h2>
        <h2 class="block stroke">{props.subline}</h2>
    </div>
)


export default headline3