import logo from './logo.svg';
import './App.css';
import FuntionComponent from './Components/FuntionComponent';
import ClassComponent from './Components/ClassComponent';
import HomeComponent from './Components/BaiTapComponent/HomeComponent';
import DataBinding from './DataBinding/DataBinding';
import StyleComponent from './StyleComponent/StyleComponent';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './StateDemo/StateDemo';
import ChangeFontSize from './StateDemo/ChangeFontSize';
import BaiTapChonXe from './BaiTapChonXe/BaiTapChonXe';
import RenderWithArray from './RenderWithArray/RenderWithArray';
import HomePage from './Props/HomePage';
import BTXemChiTiet from './Props/BTXemChiTiet/BTXemChiTiet';
import CarShop from './Props/CarShop/CarShop';
import ExerciseCart from './Props/BTCart/ExerciseCart';
import BTGioHang from './demoRedux/BTGioHang/BTGioHang';

import { store } from './redux/configStore';
import { Provider } from 'react-redux';
import BTGameXucXac from './demoRedux/BTGioHang/BTGameXucXac/BTGameXucXac';
import BaiTapQuanLyNguoiDung from './FormReact/BaiTapQuanLyNguoiDung/BaiTapQuanLyNguoiDung';
import Parent from './LifeCycle/Parent';
import BaiTapOanTuXi from './BaiTapRedux/BaiTapOanTuXi/BaiTapOanTuXi';
import BaiTapBookingTicket from './BaiTapRedux/BaiTapBookingTicket/BaiTapBookingTicket';




function App() {
  return (

    <div className="App">
      <Provider store={store} >
        {/* <BTGameXucXac /> */}
        {/* <BaiTapOanTuXi /> */}
        <BaiTapBookingTicket />
      </Provider>

    </div>

  );
}

export default App;

//       {/* <Provider store={store}> */}

//       {/* <Parent /> */}
//       {/* <BaiTapQuanLyNguoiDung/> */}
//      


//       {/* <BTGioHang /> */}
//     // </Provider>


//       {/* <ExerciseCart/> */ }

//   {/* <CarShop /> */ }
//   {/* <BTXemChiTiet/> */ }
//   {/* <HomePage /> */ }
//   {/* <RenderWithArray /> */ }
//   {/* <BaiTapChonXe /> */ }


//   {/* <ChangeFontSize /> */ }

//   {/* <StateDemo/> */ }

//   {/* <HandleEvent /> */ }

//   {/* <StyleComponent /> */ }
//   {/* <p className="text">eeeeeeeeeeee</p> */ }
//   {/* <DataBinding /> */ }

//   {/* <HomeComponent /> */ }

//   {/* <FuntionComponent/>
//       <FuntionComponent/>
//       <FuntionComponent/><FuntionComponent/>
// <br/><br/><br/>
//       <ClassComponent/> */}

//     // </div >

