import React from "react";

class Myinput extends React.Component {
    onChange() {
        console.log("change");
    }

    onBlur() {
        console.log("blured");
    }

    render() {
        return <input onChange={this.onChange} onBlur={this.onBlur} /> ;
    }
}

export default Myinput;
