import React, { Component } from 'react'
import PhoneItem from './PhoneItem'
class BTXemChiTiet extends Component {
    arrPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    state = {
        chitietPhone: { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" }
    }

    renderPhoneList = () => {
        // let content=[];
        return this.arrPhone.map((phone, index) => {
            return <div className="col-4" key={index}>
                <PhoneItem sp={phone} xemChiTiet={this.xemChiTiet} />
            </div>
        })
        // return content;
    }

    xemChiTiet = (newPhone) => {
        // console.log("click xem");
        this.setState({
            chitietPhone: newPhone
        })
    }


    render() {
        let { chitietPhone } = this.state;
        return (
            <div className="container">
                <div className="row">
                    {this.renderPhoneList()}
                </div>
                <div className="row pt-5">
                    <div className="col-4">
                        <h3>{chitietPhone.tenSP}</h3>
                        <img src={chitietPhone.hinhAnh} className="img-fluid" alt="" />
                    </div>
                    <div className="col-8">
                        <h3>Thông số kỹ thuật</h3>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{chitietPhone.manHinh}</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{chitietPhone.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td>CAMERA  TRUOC</td>
                                    <td>{chitietPhone.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>CAMERA  SAU</td>
                                    <td>{chitietPhone.cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{chitietPhone.ram}</td>
                                </tr>
                                <tr>
                                    <td>ROM</td>
                                    <td>{chitietPhone.rom}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default BTXemChiTiet;