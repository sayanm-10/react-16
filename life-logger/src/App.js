import React, { Component } from 'react';

class App extends Component {
    testClick = () => {
        console.log("hmmmmm");
        // console.log(this.props);
    };

    render() {
        console.log(this.props);
        return (
            <div>
                <h1 className="App">
                    App
                </h1>
                <button onClick={this.testClick}>Click</button>
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

export default App;
