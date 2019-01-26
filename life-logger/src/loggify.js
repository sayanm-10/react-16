import React, {Component} from "react";
import styled from "styled-components";

const loggify = (Wrapped) => {
    let originals = {};

    const methodsToLog = [
        "componentWillMount",
        "componentDidMount",
        "componentWillUnmount",
        "shouldComponentUpdate",
        "componentDidUpdate"
    ];

    methodsToLog.forEach(method => {
        if(Wrapped.prototype[method]) {
            originals[method] = Wrapped.prototype[method];
        }


        Wrapped.prototype[method] = function (...args) {
            let original = originals[method];

            console.groupCollapsed(`${Wrapped.displayName} called ${method}`);

            if (method === "shouldComponentUpdate") {
                console.log("nextProps", args[0]);
                console.log("nextState", args[1]);
            }

            if (method === "componentDidUpdate") {
                console.log("prevProps", args[0]);
                console.log("prevState", args[1]);
            }

            console.groupEnd();

            if (original) {
                original = original.bind(this);
                // return was added for shouldComponentUpdate
                return original(...args);
            }

            if (method === "shouldComponentUpdate" && typeof original === 'undefined') {
                return true;
            }
        }
    });

    return class  extends Component {
        render() {
            return (
                <LoggerContainer>
                    <H2>
                        {Wrapped.displayName} is now logged!
                    </H2>
                    <Wrapped {...this.props} />
                </LoggerContainer>
            );
        }
    }
};

const LoggerContainer = styled.div`
    background-container: aliceblue;
    border: 2px grooved aquamarine;
    border-radius: 2px;
`;

LoggerContainer.displayName = "LoggerContainer";

const H2 = styled.div`
    color: blueviolet;
`;

H2.displayName = "h2";

export default loggify;
