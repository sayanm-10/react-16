import React, { Component } from 'react';
import loggify from "./loggify";

import PollChild from "./PollChild";

class App extends Component {
    state = {};

    componentDidMount() {
        this.ctx = this.refs.appCanvas.getContext('2d');
        this.ctx.fillStyle = "blue";
        this.ctx.arc(75, 75, 50, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.pollChildValue !== this.state.pollChildValue) {
            let {ctx} =  this;
            ctx.fillStyle = this.state.pollChildValue % 2 === 1 ? "green" : "red";
            this.ctx.arc(75, 75, 50, 0, 2 * Math.PI);
            this.ctx.fill();
        }
    }


    render() {
        const {showPollChild} = this.state;

        return (
            <div>
                <h1 className="App">
                    App
                </h1>

                <canvas ref={"appCanvas"} width={200} height={200} />

                <button onClick={() => this.setState((prevState) => ({showPollChild: !prevState.showPollChild})) }>
                    {showPollChild ? "Hide": "Show"} Child
                </button>
                
                {showPollChild ? <PollChild pollChange={(pollChildValue) => this.setState({pollChildValue})} /> : null}
            </div>
        );
    }
}

// const myTestWrapper = (WrappedComponent) => {
//     return class extends Component {
//         render() {
//             return (
//                 <div style={{backgroundColor: "blue"}}>
//                     <WrappedComponent />
//                 </div>
//             );
//         }
//     }
// };
//
// App = myTestWrapper(App);

/*
    Configure our own static properties.
    Can also be written within the class using "static" keyword.
*/
App.displayName = "LoggerApp";
App.defaultProps = {
    data: []
};

App = loggify(App);

export default App;
