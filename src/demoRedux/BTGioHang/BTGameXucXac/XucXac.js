import React, { Component } from 'react'
import { connect } from 'react-redux'


class XucXac extends Component {

    renderKetQua = () => {
        let {mangXucXac,banChon}= this.props.BaiTapGameReducer;
        let tongDiem = mangXucXac.reduce((td, xucXac, index) => {
            return td += xucXac.diem;
        }, 0);
        let ketQua = 'THUA';
        if ((tongDiem > 11 && banChon) || (tongDiem <= 11 && !banChon)) {
            ketQua='THẮNG';
        }
        return <span>{tongDiem}-{ketQua}</span>
    }

    render() {
        console.log(this.props);
        let { mangXucXac } = this.props.BaiTapGameReducer;

        return (
            <div className="row text-center">
                <div className="col-3">
                    <button className="btn" onClick={() => {
                        const action = {
                            type: 'DAT_CUOC',
                            banChon: true
                        }
                        this.props.dispatch(action);
                    }} >
                        <div className="bg-danger p-5 text-white display-4">
                            TÀI
                        </div>
                    </button>
                </div>

                <div className="col-6">
                    {mangXucXac.map((xucXac, index) => {
                        return <img width="50" height="50" src={xucXac.hinhAnh} key={index} />
                    })}

                    <div className="text-center display-4">{this.renderKetQua()} </div>
                </div>

                <div className="col-3">
                    <button onClick={() => {
                        const action = {
                            type: 'DAT_CUOC',
                            banChon: false
                        }
                        this.props.dispatch(action);
                    }}  >
                        <div className="bg-dark p-5 text-white display-4">
                            XỈU
                        </div>
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        BaiTapGameReducer: rootReducer.BaiTapGameReducer
    }
}
export default connect(mapStateToProps)(XucXac)