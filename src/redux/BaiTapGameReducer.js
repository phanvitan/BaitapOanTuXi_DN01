const stateDefault = {
    banChon: true, //true : tài   - false:xỉu
    soBanThang: 0,
    soBanChoi: 0,
    mangXucXac: [
        { hinhAnh: './img/imgGameXucXac/1.png', diem: 1 },
        { hinhAnh: './img/imgGameXucXac/1.png', diem: 1 },
        { hinhAnh: './img/imgGameXucXac/1.png', diem: 1 },
    ]

}

export const BaiTapGameReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC': {
            state.banChon = action.banChon;
            return { ...state };
        }
        case 'PLAY_GAME': {
            let mangXXNN = [];
            for (let i = 0; i < 3; i++) {
                let soNN = Math.floor(Math.random() * 6) + 1;
                let xucXacNN = { hinhAnh: `./img/imgGameXucXac/${soNN}.png`, diem: soNN };
                mangXXNN.push(xucXacNN);
            }
            state.mangXucXac = mangXXNN;
            ///tính điểm :
            let tongDiem = mangXXNN.reduce((td, xucXac, index) => {
                return td += xucXac.diem;
            }, 0);
            console.log('tong diem', tongDiem);

            //so sanh điểm với chọn lựa cua nguoi chơi
            if ((tongDiem > 11 && state.banChon) || (tongDiem <= 11 && state.banChon === false)) {
                state.soBanThang += 1;
            }
            state.soBanChoi += 1;
            return { ...state };
        }

        default: {
            return state
        }
    }
}