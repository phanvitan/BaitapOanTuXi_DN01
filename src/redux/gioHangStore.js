const gioHang = [
    { "maSP": 1, "tenSP": "VinSmart Live", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg", "soLuong": 1 }
];

export const gioHangStore = (state = gioHang, action) => {
    //    console.log(action);
    switch (action.type) {
        case "THEM_GIO_HANG": {
            // code xử lý thêm giỏ hàng (xét lại state)
            let sanPhamClick = { ...action.sanPham, soLuong: 1 };
            let gioHangCapNhat = [...state];
            let spGioHang = gioHangCapNhat.find((sp) => {
                return sp.maSP === sanPhamClick.maSP;
            });
            if (spGioHang) {
                spGioHang.soLuong += 1;
            } else {
                gioHangCapNhat.push(sanPhamClick);
            }
            console.log(gioHangCapNhat);
            return gioHangCapNhat;
        }
        case "XOA_SAN_PHAM": {
            //FILTER : lấy các sp có mã khac với sp cần xóa
            let gioHangCapNhat = [...state];
            const mangMoi = gioHangCapNhat.filter((sp) => {
                return sp.maSP !== action.idSP
            });
            return mangMoi;
        }
        case "TANG_GIAM_SOLUONG": {
            console.log('tăng giảm SL')
            let spGioHang = state.find(sp=> sp.maSP === action.idSP);
            if(spGioHang){
                spGioHang.soLuong += action.soLuong;
                if(spGioHang.soLuong > 100 || spGioHang.soLuong<1){
                    alert('số lượng tối thieu la 1, tối đa là 100');
                    spGioHang.soLuong -= action.soLuong;
                }
            }
            return [...state];
        }
        default: return state;
    }
}