import React, { Component } from 'react';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import Secret from '../../components/secret';
import Timer from '../../components/timer';
import {} from './style.scss';

class SecretsContainer extends Component {
    static propTypes = {
        allCorrect: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            secrets: [
                {
                    id: 1,
                    code: '1',
                    correct: false,
                    focus: true,
                    label: 'Milla'
                },
                {
                    id: 2,
                    code: '2',
                    correct: false,
                    label: 'Mikkel'
                },
                {
                    id: 3,
                    code: '3',
                    correct: false,
                    label: 'Stephanie'
                }
            ],
            allCorrect: false
        }
    }

    handleCorrect = (secret) => {
        const index = this.state.secrets.findIndex((item) => secret.id === item.id);
        const secrets = update(this.state.secrets, {$splice: [[index, 1, secret]]}); 
        const allCorrect = secrets.every(item => item.correct);

        this.setState({
            secrets,
            allCorrect
        });

        if (allCorrect) {
            this.props.allCorrect();
        }
    }

    render() {
        let secretsClass = ['secrets'];

        if (this.state.allCorrect) {
            secretsClass.push('hide');
        }

        return (
            <article className={secretsClass.join(' ')}>
                <Timer time={300}/>
                <div className="container">
                    {this.state.secrets.map((item, index) => {
                        return <Secret item={item} key={index} correct={this.handleCorrect}/>
                    })}
                </div>
            </article>
        )
    }
}

export default SecretsContainer;