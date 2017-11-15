import React, { Component } from 'react';
import Snowflakes from '../../components/snowflakes';
import SecretsContainer from '../secrets';
import CongratsContainer from '../congrats';
import Slides from '../../decorators/slides';
import {} from './reset.scss';
import {} from './style.scss';

@Slides
class AppContainer extends Component {
    constructor() {
        super();

        this.state = {
            showCongrats: false
        }
    }

    handleAllCorrect = () => {
        this.setState({showCongrats: true});
    }

    render() {
        return (
            <article className="app-container">
                <Snowflakes limit={150}/>
                <SecretsContainer allCorrect={this.handleAllCorrect}/>
                {this.state.showCongrats ? <CongratsContainer /> : ''}
            </article>
        )
    }
}

export default AppContainer;