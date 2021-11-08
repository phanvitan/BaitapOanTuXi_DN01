// import { connect } from "react-redux";

const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/imgGameOanTuTi/keo.png', datCuoc: false },
        { ma: 'bua', hinhAnh: './img/imgGameOanTuTi/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './img/imgGameOanTuTi/bao.png', datCuoc: true },
    ],
    ketQua: "I am iron man, iloveyou",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'bao', hinhAnh: './img/imgGameOanTuTi/bao.png' },
}

const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHON_KEO_BUA_BAO': {
            let mangCuocUpdate = [...state.mangDatCuoc];
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                if (item.ma === action.maCuoc) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false }
            })
            //     return { ...item, datCuoc: false }
            // })
            // console.log('mangCuocUpdate', mangCuocUpdate)
            // let index = mangCuocUpdate.findIndex(qc => qc.ma === action.maCuoc);
            // if (index !== -1) {
            //     mangCuocUpdate[index].datCuoc = true;
            // }
            state.mangDatCuoc = mangCuocUpdate;
            return { ...state }
        }
        case 'RAN_DOM': {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc
            [soNgauNhien];
            state.computer = { ...quanCuocNgauNhien };
            console.log('random', action)
            return { ...state }
        }
        case 'END_GAME':
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;
            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Hòa nhau!!!';
                    } else if (computer.ma = 'bua') {
                        state.ketQua = 'THUA SML !!!';
                    } else {
                        state.soBanThang += 1;
                        state.ketQua = "I am iron man, iloveyou";
                    }
                    ; break;
                case 'bua':
                    if (computer.ma === 'keo') {
                        state.soBanThang += 1;
                        state.ketQua = "I am iron man, iloveyou";
                    } else if (computer.ma = 'bua') {
                        state.ketQua = 'Hòa nhau!!!';
                    } else {
                        state.ketQua = 'THUA SML !!!';
                    } break;
                case 'bao':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'THUA SML !!!';
                    } else if (computer.ma = 'bua') {
                        state.soBanThang += 1;
                        state.ketQua = "I am iron man, iloveyou";
                    } else {
                        state.ketQua = 'Hòa nhau!!!';
                    } break;
                default: state.ketQua = "I am iron man, iloveyou";
            }
            state.soBanChoi += 1;
            return { ...state }
        default: return { ...state }
    }
}
export default BaiTapOanTuXiReducer;