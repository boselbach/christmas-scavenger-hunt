import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {} from './style.scss';

class Timer extends Component {
    static propTypes = {
        time: PropTypes.number
    }
    
    constructor(props) {
        super(props);
        this.state = {
            time: props.time
        }
    }

    componentDidMount = () => {
        this.timerId = setInterval(() => {
            this.setState(prevState => {
                let duration = moment.duration('seconds', this.state.time);
                let countdown = duration.milliseconds();
                
                console.log(moment(countdown).format('h:mm:ss'));
                
                return {time: prevState.time -1};
            });
        }, 1000);
    } 

    componentWillUnmount = () => {
        clearInterval(this.timerId);
    }
    
    render() {
        return (
            <div className="timer">
                {moment(moment.duration('seconds', this.state.time)).format('h:mm:ss')}
            </div>
        )
    }
}

export default Timer;