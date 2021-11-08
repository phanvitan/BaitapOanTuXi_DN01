import React, { Component } from 'react'
import { connect } from 'react-redux';

class KetQuaTroChoi extends Component {
    render() {
        let {banChon,soBanThang,soBanChoi} = this.props.BaiTapGameReducer;
        
        return (
            <div className="container text-center">
                <div className="display-4">
                    BẠN CHỌN : <span className="text-danger">{banChon ? 'TÀI':'XỈU'}</span>
                </div>
                <div className="display-4">
                    TỔNG SỐ BÀN THẮNG : <span className="text-success">{soBanThang}</span>
                </div>
                <div className="display-4">
                    TỔNG SỐ BÀN CHƠI : <span className="text-danger">{soBanChoi}</span>
                </div>
                <div className="display-4">
                    <button onClick={() => {
                        const action ={
                            type:'PLAY_GAME',
                        }
                        this.props.dispatch(action);
                    }} className="btn btn-success"> PLAY GAME </button>
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

export default connect(mapStateToProps)(KetQuaTroChoi)