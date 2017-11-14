import React, { Component } from 'react';
import {} from './style.scss';

class Secret extends Component {
    render() {
        return (
            <article className="congrats">                
                <img className="ferry" src="assets/images/ferry.png" alt=""/>
                <audio autoPlay>
                    <source src="../../../assets/music/acoustic-jinglebells.ogg" type="audio/ogg" />
                </audio>
            </article>
        )
    }
}

export default Secret;