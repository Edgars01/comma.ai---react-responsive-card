import React, { Component } from 'react';

const textArray = ['pandas are the nicest universal car interfaces ever. They give you full access to the many communication buses of your car.'
, 'A panda+cabana is like fitbit for your car. Track your RPMs, MPG, cornering G-force, battery life, and so much more. Panda also work as a CAN to USB adapter.',
 'pandas are designed for cars 2008 and newer. panda firmware is released under the MIT license.'];

class Textchange extends Component {

    constructor() {
        super();
        this.state = { textIdx: 0 };
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            let currentIdx = this.state.textIdx;
            this.setState({ textIdx: currentIdx + 1 });
        }, 3000);
    }

    componentDidUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        let textThatChanges = textArray[this.state.textIdx % textArray.length];

        return (
            <section>
                <p>{textThatChanges}</p>
            </section>
        )
    }
}

export default Textchange;

