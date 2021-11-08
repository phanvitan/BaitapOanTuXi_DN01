import React, { Component } from 'react';
import './BaiTapOanTuXi.css'
import Computer from './Computer';
import KetQuaTroChoi from './KetQuaTroChoi';
import Player from './Player';
import { connect } from 'react-redux';

class BaiTapOanTuXi extends Component {
    render() {
        return (
            <div className="gameOanTuXi" >

                <div className="row text-center mt-5">
                    <div className="col-4 mt-3" >
                        <Player />
                    </div>
                    <div className="col-4 mt-3" >
                        <KetQuaTroChoi />                      
                        <button onClick={() => {
                            this.props.playGame()
                        }} className="btn btn-success p-2 display-4 mt-5" >PLAY GAME</button>
                    </div>
                    <div className="col-4 mt-3" >
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        playGame: () => {
            let count = 0;
            let randomComputerItem = setInterval(() => {
                let soNgauNhien = Math.floor(Math.random() * 3);
                dispatch({
                    type: 'RAN_DOM',
                    // soNgauNhien
                })
                count++;
                if (count > 10) {
                    clearInterval(randomComputerItem)
                    dispatch({
                        type: 'END_GAME',
                    })
                }
            }, 100)
        }
    }
}
export default connect(null, mapDispatchToProp)(BaiTapOanTuXi)
