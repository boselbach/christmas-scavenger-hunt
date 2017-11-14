import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {} from './style.scss';

class Snowflakes extends Component {
    static propTypes = {
        limit: PropTypes.number.isRequired
    }

    render() {
        let snowflakes = Array(...Array(this.props.limit)).map((item, index) => <i key={index}></i>);

        return (
            <div className="snowflakes">
                {snowflakes}
            </div>
        )
    }
}

export default Snowflakes;