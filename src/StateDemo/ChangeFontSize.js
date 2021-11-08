import React, { Component } from 'react'

export default class ChangeFontSize extends Component {
    state = {
        fs: 16
    }
    render() {
        return (
            <div className="container py-5">
                <p style={{ fontSize: `${this.state.fs}px` }} className="bg-dark text-white" >Lorem ipsum dolor sit amet.</p>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-success" onClick={(params) => {
                        this.setState({
                            fs: this.state.fs + 2
                        })
                    }}>+</button>
                    <button type="button" className="btn btn-danger" onClick={(params) => {
                        this.setState({
                            fs: this.state.fs - 2
                        })
                    }} >-</button>
                </div>
            </div>
        )
    }
}
