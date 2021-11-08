import { combineReducers, createStore } from "redux";
// import { combineReducers} from "redux";
import {gioHangStore} from './gioHangStore';
import { BaiTapGameReducer } from "./BaiTapGameReducer";
import {BaiTapQuanLyNguoiDungReducer} from "./BaiTapQuanLyNguoiDungReducer";
import BaiTapOanTuXiReducer from "./BaiTapOanTuXiReducer";

//reducer : khai báo state, gán lại giá trị cho state và render lại UI
const rootReducer = combineReducers({
    //chứa các reducer
    gioHangStore:gioHangStore,BaiTapGameReducer,BaiTapQuanLyNguoiDungReducer,BaiTapOanTuXiReducer
})
// export default rootReducer;

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
