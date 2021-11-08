import React, { Component } from 'react'
import { connect } from 'react-redux';

class GioHang extends Component {

    renderGioHang = () => {
        return this.props.gioHang.map((sp, index) => {
            return (
                <tr key={index}>
                    <td>{sp.maSP}</td>
                    <td>{sp.tenSP}</td>
                    <td style={{ width: "100px" }} className="w-25" >
                        <img className="img-fluid" src={sp.hinhAnh} alt="..." />
                    </td>
                    <td>
                        <button className="btn btn-info" onClick={() => {
                            this.props.tangGiamSoLuong(sp.maSP, 1)
                        }} >+</button>
                        <span>{sp.soLuong}</span>
                        <button className="btn btn-info" onClick={(params) => {
                            this.props.tangGiamSoLuong(sp.maSP, -1)
                        }}>-</button>
                    </td>
                    <td>{sp.giaBan.toLocaleString()}</td>
                    <td>
                        {(sp.soLuong * sp.giaBan).toLocaleString()}
                    </td>
                    <td>
                        <button onClick={() => {
                            // CACH 1:
                            // const action = {
                            //     type: "XOA_SAN_PHAM",
                            //     idSP:sp.maSP
                            // }
                            // this.props.dispatch(action);

                            //cach 2:  
                            this.props.xoaSP(sp.maSP)
                        }} className="btn btn-danger">XÓA</button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        console.log(this.props)
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Mã sản phẩm</th>
                                        <th scope="col">Tên sản phẩm</th>
                                        <th scope="col">Hình ảnh</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Đơn giá</th>
                                        <th scope="col">Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderGioHang()}
                                </tbody>
                            </table>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//CACH 2 : 
// Hàm giup đưa data lên store của redux
const mapDispatchToProps = (dispatch) => {
    return {
        xoaSP: (maSP) => {
            const action = {
                type: "XOA_SAN_PHAM",
                idSP: maSP
            }
            dispatch(action);
        },
        tangGiamSoLuong: (maSP, soLuong) => {
            const action = {
                type: "TANG_GIAM_SOLUONG",
                idSP: maSP,
                soLuong: soLuong
            }
            dispatch(action);
        }
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        gioHang: rootReducer.gioHangStore
    }
}

const ComponentGioHangRedux = connect(mapStateToProps, mapDispatchToProps)(GioHang);
export default ComponentGioHangRedux;