import React, { Component } from 'react';
import Snowflakes from '../../components/snowflakes';
import SecretsContainer from '../secrets';
import Congrats from '../../components/congrats';
import {} from './reset.scss';
import {} from './style.scss';

class AppContainer extends Component {
    constructor() {
        super();

        this.state = {
            showCongrats: false
        }
    }

    handleAllCorrect = () => {
        console.log('i should be called?');
        setTimeout(() => {
            this.setState({showCongrats: true});
        }, 2000);
    }

    render() {
        return (
            <article className="app-container">
                <Snowflakes limit={150}/>
                <SecretsContainer allCorrect={this.handleAllCorrect}/>
                {this.state.showCongrats ? <Congrats /> : ''}
            </article>
        )
    }
}

export default AppContainer;