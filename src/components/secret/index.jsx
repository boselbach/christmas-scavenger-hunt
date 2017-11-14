import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {} from './style.scss';

class Secret extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired
    }

    componentDidMount = () => {
        if (this.props.item.focus) {
            this.input.focus();
        }
    }

    handleChange = (e) => {
        let secret = Object.assign({}, this.props.item, {correct: this.props.item.code === e.target.value});

        this.props.correct(secret);
    }

    render() {
        let secretClass = ['secret'];

        if (this.props.item.correct) {
            secretClass.push('correct');
        }

        return (
            <article className={secretClass.join(' ')}>
                <input ref={input => this.input = input} type="password" onChange={this.handleChange} placeholder="Indtast kode"/>
            </article>
        )
    }
}

export default Secret;