import React, { Component } from 'react'
import { connect } from 'react-redux';
class FormDangKy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDienThoai: '',
            maLoaiNguoiDung: 'NguoiDung'
        }
    }

    handleSubmit = (event) => {
        event.preventDefault(); // cản sự kiện reload của browser khi submit form
        // console.log('submit');

        //tạo ra action chứa dữ liệu form từ nguoi dùng nhập vào (this state)
        const action = { type: 'DANG_KY', nguoiDung: this.state }
        //đưa du liệu lên redux store
        this.props.dispatch(action)
        console.log('submit');
    }

    handleChangInput = (event) => {
        // let value = event.target.value;
        // let name = event.target.name;
        let { value, name } = event.target;
        this.setState({
            [name]: value
        }, () => {
            console.log('state', this.state)
        });
    }

    // static getDerivedStateFromProps(newProps, currentState) {
    //     if(newProps.nguoiDungChinhSua.taiKhoan !== currentState.taiKhoan){
    //         let newState = {...newProps.nguoiDungChinhSua}
    //         return newState;
    //     }
    //     return currentState;
    // }

    componentWillReceiveProps(newprops){
        let newState = newprops.nguoiDungChinhSua;
        this.setState(newState);
    }

    render() {
        // let { taiKhoan, matKhau, hoTen, email, soDienThoai, maLoaiNguoiDung } = this.props.nguoiDungChinhSua;
        let { taiKhoan, matKhau, hoTen, email, soDienThoai, maLoaiNguoiDung } = this.state;

        return (
            <form className="card" onSubmit={this.handleSubmit} >
                <div className="card-header bg-dark text-white" >
                    Form đăng ký
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <p>Tài khoản</p>
                                <input className="form-control" value={taiKhoan} name="taiKhoan" onChange={this.handleChangInput} />
                            </div>

                            <div className="form-group">
                                <p>Mật khẩu</p>
                                <input className="form-control" value={matKhau} name="matKhau" onChange={this.handleChangInput} />
                            </div>
                            <div className="form-group">
                                <p>Họ Tên</p>
                                <input className="form-control" value={hoTen} name="hoTen" onChange={this.handleChangInput} />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="form-group">
                                <p>Email</p>
                                <input className="form-control" value={email} name="email" onChange={this.handleChangInput} />
                            </div>

                            <div className="form-group">
                                <p>Số điện thoại</p>
                                <input className="form-control" value={soDienThoai} name="soDienThoai" onChange={this.handleChangInput} />
                            </div>

                            <div className="form-group">
                                <p>Mã loại người dùng</p>
                                <select className="form-control" value={maLoaiNguoiDung} >
                                    <option value="NguoiDung">Người dùng </option>
                                    <option value="QuanTri">Quản trị </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <button className="btn btn-outline-success">Đăng ký</button>
                        <button className="btn btn-outline-primary">Cập nhật</button>
                    </div>
                </div>

            </form>
        )
    }
}

const mapStateToProps = (rootreducer) => {
    return {
        nguoiDungChinhSua: rootreducer.BaiTapQuanLyNguoiDungReducer.nguoiDungChinhSua
    }
}

export default connect(mapStateToProps)(FormDangKy)