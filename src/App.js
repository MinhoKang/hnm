import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

// 1. 전체상품, 로그인, 상품 상세 페이지
// 1-1. 나브바 만들기
// 2. 전체 상품:  전체 상품 볼 수 있음
// 3. 로그인: 로그인 버튼을 누르면 나옴
// 4. 상품 디테일을 눌렀을 때 로그인이 안되어있을경우 로그인 페이지
// 5. 로그인이 되어 있으면 상품 디테일을 볼 수 있음
// 6. 로그아웃 누르면 로그아웃
// 7. 로그아웃 하면 디테일 못 봄. 다시 로그인
// 8. 로그인 하면 로그아웃으로 보이고, 로그아웃하면 로그인이 보인다.
// 9. 상품을 검색할 수 있다.
function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log(authenticate, '이 변했다!');
  }, [authenticate]);
  // const PrivateRoute = () => {
  //   return authenticate == true ? <ProductDetail /> : <Navigate to="/login" />;
  // };
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
