import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'
import './BTGameXucXac.css'

export default class BTGameXucXac extends Component {
    render() {
        return (
            <div className="bg-game">
                <h3 className="text-center display-4 p-5 ">Bài tập game xúc xắc</h3>
                <XucXac/>
                <KetQuaTroChoi/>
            </div>
        )
    }
}
