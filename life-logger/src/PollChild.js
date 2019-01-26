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
                    poll: Math.random()
                });
            },
            1000
        )
    };

    componentWillUnmount() {
        clearInterval(this.pollInterval);
    }

    render() {
        return (
            <h4>Poll: {this.state.poll}</h4>
        );
    }
}

PollChild = loggify(PollChild);

export default PollChild;