import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

// 1. 전체상품페이지, 로그인, 상품상세페이지
// 1-1. 네비게이션 바
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
//  상품 디테일을 눌렀지만, 로그인이 되어있지않으면 로그인 페이지
// 4. 로그인이 되어 있을 경우에는, 상품 디테일 페이지를 볼 수 있다.
// 5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
//  로그아웃이 되면 상품페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
// 6. 로그인을 하면 로그아웃이 보인다. 
// 7. 상품 검색을 할 수 있다.


//https://codingnoona.thinkific.com/courses/take/3/lessons/34209183-6
// 10.리덕스 미들웨어, 총정리 완료
// 로그아웃 리덕스 완료
// mini 과제 완료
// 최신리덕스 redux toolkit 으로 코드 변경

function App() {

  const [authenticate,setAuthenticate] = useState(false);

  useEffect(()=>{
    console.log("aaa,",authenticate);
  },[authenticate])

  return (
    <div>
      <Navbar authenticate={authenticate}/>
      <Routes>
      <Route path="/" element={<ProductAll/>}/>
      <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
      <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
