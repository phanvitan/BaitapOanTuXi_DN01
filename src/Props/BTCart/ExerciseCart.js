import React, { Component } from 'react'
import Cart from './Cart';
import ProductList from './ProductList';

class ExerciseCart extends Component {

    arrPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    state = {
        gioHang: []
    }

    themGioHang = (spAdded) => {
        // console.log(spAdded);
        let spGioHang = { ...spAdded, soLuong: 1 };
        // console.log(spGioHang);
        let gioHangCapNhat = [...this.state.gioHang];

        //find : tìm và trả về giá trị cua phần tử
        //findIndex : tìm và trả về vị trí cua phần tử
        let spTK = gioHangCapNhat.find((sp) => {
            return sp.maSP === spGioHang.maSP;
        });
        // console.log(spTK);
        if (spTK) {
            //nếu tìm thấy : tăng số lượng +1 , mỗi lần click tăng thêm 1
            spTK.soLuong += 1;
        } else {  /// ko tìm thấy : thêm mới vô giỏ hàng
            gioHangCapNhat.push(spGioHang);
        }
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    xoaGIoHang = (spDeleted) => {
        // console.log(spDeleted);
        let { gioHang } = this.state;
        let index = gioHang.findIndex((sp) => {
            return sp.maSP === spDeleted.maSP;
        });
        if (index !== -1) {
            //tìm thấy : xóa sp 
            gioHang.splice(index, 1);
        }
        this.setState({
            gioHang: gioHang
        })
    }

    tangGiamSL = (maSPSL, soLuong) => {
        console.log(maSPSL);
        let { gioHang } = this.state;
        //tìm sp cần đổi số lượng
        let spTK = gioHang.find((sp) => {
            return maSPSL === sp.maSP;
        });
        if (spTK) {  ///tìm thấy : đổi số lượng
            spTK.soLuong += soLuong
            if(spTK.soLuong <1){
                // alert("SO LUONG KO HỢP LỆ")
                spTK.soLuong -= soLuong
            }
        }
        this.setState({
            gioHang: gioHang
        })
    }

    tongSL = () => {
        // reduce() : duyệt mảng dựa vào biểu thức tính toán
        let { gioHang } = this.state;
        let tongSL = gioHang.reduce((soLuong,sp,index) => {
            return soLuong += sp.soLuong;
        },0);
        return tongSL;
    }
    

    render() {
        return (
            <div className="container" >
                <div className="row justify-content-end">
                    <div className="col-4">
                        <p>GIỎ HÀNG ({this.tongSL()})</p>
                    </div>
                </div>

                <ProductList mangSP={this.arrPhone} themGioHang={this.themGioHang} />

                <Cart tangGiamSL={this.tangGiamSL} xoaGioHang={this.xoaGIoHang} gioHang={this.state.gioHang} />

            </div >
        )
    }
}
export default ExerciseCart;