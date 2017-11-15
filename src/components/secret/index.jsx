import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {} from './style.scss';

class Secret extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired
    }

    constructor() {
        super();

        this.state = {
            active: false
        }
    }

    handleChange = (e) => {
        let secret = Object.assign({}, this.props.item, {correct: this.props.item.code === e.target.value});

        this.props.correct(secret);
    }

    handleFocus = (e) => {
        this.setState({active: true});
    }

    handleBlur = (e) => {
        this.setState({active: false});
    }

    render() {
        let secretClass = ['secret'];
        let labelClass = [];

        if (this.props.item.correct) {
            secretClass.push('correct');
        }

        if (this.state.active) {
            labelClass.push('active');
        }

        return (

            <article className={secretClass.join(' ')}>
                <img className="nissehue" src="../../../assets/images/nissehue.png" alt=""/>
                <input 
                    ref={input => this.input = input} 
                    onChange={this.handleChange} 
                    onFocus={this.handleFocus} 
                    onBlur={this.handleBlur}
                    type="password" 
                    placeholder="Indtast kode" 
                />
                <label className={labelClass.join(' ')}>
                    {this.props.item.label}
                </label>
            </article>
        )
    }
}

export default Secret;