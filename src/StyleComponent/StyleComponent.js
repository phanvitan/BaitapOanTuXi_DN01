import React, { Component } from 'react'
import './Style.css';
import styleModule from './StyleComponent.module.css'

export default class StyleComponent extends Component {
    render() {
        let styleInline={
            backgroundColor:"green",
                    color:"white"
        }
        return (
            <div className="container">
                
                <p style={styleInline} className="text">Style Component</p>

<p className={styleModule.fontText} >style module</p>
<p className={`${styleModule["bg-color"]} ${styleModule["con_p"]}`} >style 22  module</p>


            </div>
        )
    }
}
