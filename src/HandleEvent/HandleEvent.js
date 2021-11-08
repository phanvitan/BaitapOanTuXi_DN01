import React, { Component } from 'react'

class HandleEvent extends Component {

    testHandleEvent = () => {
        alert("clink rồi nè");
    }

    showinfo = (name) => {
        alert(`Hello ${name}`);
    }

    render() {
        let fullName = "Ng thi học viên";
        return (
            <div className="container py-5">
                <button className="btn btn-warning mr-3" onClick={this.testHandleEvent}  >CLICK ME</button>
                <br /><br />
                <button className="btn btn-warning" onClick={() => {
                    this.showinfo(fullName);
                }}  >SHOW INFO </button>

            </div>
        )
    }
}
export default HandleEvent;