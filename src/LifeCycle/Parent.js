import React, { Component } from 'react'
import Child from './Child';

export default class Parent extends Component {

    constructor(props) {
        super(props);
        console.log('constrcutor');
        this.state = {
            objectNumber: { number: 1 },
            like: 1
        }
    }
    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps');
        return null;
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    render() {
        console.log('render')
        return (
            <div className="container">
                {this.state.like > 2 ? '':<Child objectNumber={this.state.objectNumber} />}
                {this.state.objectNumber.number}
                <button className="btn btn-success" onClick={() => {
                    let newNumber = { ...this.state.objectNumber };
                    newNumber.number += 1;
                    this.setState({ objectNumber: newNumber })
                }} >+</button>


                <p>Like:{this.state.like}</p>
                <button className="btn btn-danger" onClick={() => {
                    this.setState({ like: this.state.like + 1 })
                }} >Like</button>

                <p className="display-4" >{this.state.number}</p>
                <br />
                <br />
            </div>
        )
    }
    componentDidMount() {
        console.log('componentDidmount');

    }
    componentDidUpdate(prevProps, prevState) {
        //hạn chế setState trong lifecycle này, nếu setstate thì phải có điều kiện if 
        console.log('componentDidUpdate')
    }

}
