import React, {Component} from 'react';
import loggify from "./loggify";

class PollChild extends Component {
    state = {};

    static displayName = "PollChild";

    componentDidMount() {
        this.pollData();
    }

    pollData = () => {
        this.pollInterval = setInterval(
            () => {
                console.log("Poll!");
                this.setState({
                    poll: Math.round(10 * Math.random() + 1)
                },
                    () => {this.props.pollChange(this.state.poll);}
                );
            },
            1000
        )
    };

    componentWillUnmount() {
        clearInterval(this.pollInterval);
    }

    // improve efficiency by taking a look at the state change
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextState.poll !== this.state.poll) {
            return true;
        }
    }

    render() {
        return (
            <h4>Poll: {this.state.poll}</h4>
        );
    }
}

PollChild = loggify(PollChild);

export default PollChild;