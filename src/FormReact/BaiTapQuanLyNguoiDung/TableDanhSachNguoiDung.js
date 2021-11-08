import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableDanhSachNguoiDung extends Component {
    render() {
        let { mangNguoiDung } = this.props.BaiTapQuanLyNguoiDungReducer;

        return (
            <div className="card">
                <div className="card-header bg-dark text-white font-weight-bold" >
                    Danh sách người dùng
                </div>
                <div className="card-body">
                    <table className="table">

                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tài khoản</th>
                                <th>Mật khẩu</th>
                                <th>Họ tên</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>
                                <th>Loại người dùng</th>
                            </tr>

                        </thead>
                        <tbody>
                            {mangNguoiDung.map((nguoiDung, index) => {
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{nguoiDung.taiKhoan}</td>
                                    <td>{nguoiDung.matKhau}</td>
                                    <td>{nguoiDung.hoTen}</td>
                                    <td>{nguoiDung.email}</td>
                                    <td>{nguoiDung.soDienThoai}</td>
                                    <td>{nguoiDung.maLoaiNguoiDung}</td>
                                    <td>
                                        <button className="btn btn-danger mr-2">Xóa</button>
                                        <button className="btn btn-primary" onClick={() => {
                                            const action = {
                                                type: 'CHINH_SUA',
                                                nguoiDungChinhSua:nguoiDung
                                            };
                                            this.props.dispatch(action);
                                        }} >Sửa</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootreducer) => {
    return {
        BaiTapQuanLyNguoiDungReducer: rootreducer.BaiTapQuanLyNguoiDungReducer
    }
}

export default connect(mapStateToProps)(TableDanhSachNguoiDung)