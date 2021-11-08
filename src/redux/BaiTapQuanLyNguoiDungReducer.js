let mangNguoiDungValue =  [
    { taiKhoan: 'a', matKhau: '123', hoTen: 'Nguyen Van A', email: 'e@gmail.com', soDienThoai: '261631311', maLoaiNguoiDung: 'NguoiDung' },
    { taiKhoan: 'b', matKhau: '456', hoTen: 'Nguyen Van B', email: 'e@gmail.com', soDienThoai: '261631311', maLoaiNguoiDung: 'NguoiDung' }
]
if(localStorage.getItem('danhSachNguoiDung')){
    //lấy dữ liệu storage có sẵn ra làm giá trị mặc định
    mangNguoiDungValue = JSON.parse(localStorage.getItem('danhSachNguoiDung'));
}

const stateDefault = {
    mangNguoiDung:mangNguoiDungValue,
    nguoiDungChinhSua: { taiKhoan: '', matKhau: '', hoTen: '', email: '', soDienThoai: '', maLoaiNguoiDung: 'NguoiDung' }
}

export const BaiTapQuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DANG_KY': {
            state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];
            //lưu vào localstorage
            localStorage.setItem('danhSachNguoiDung',JSON.stringify(state.mangNguoiDung));
            return { ...state }
        }
        case 'CHINH_SUA': {
            state.nguoiDungChinhSua = action.nguoiDungChinhSua;
            return { ...state }
        }

        default: { return state }
    }
}