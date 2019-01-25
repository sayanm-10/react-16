import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="App">
                App
            </div>
        );
    }
}

const myTestWrapper = (WrappedComponent) => {
    return class extends Component {
        render() {
            return (
                <div style={{backgroundColor: "blue"}}>
                    <WrappedComponent />
                </div>
            );
        }
    }
};

App = myTestWrapper(App);

export default App;
