import MainPage from './pages/MainPage';
import LandingPage from './pages/LandingPage';
import Login from './components/login/Login';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import KakaoLogin from './components/login/KakaoLogin';

localStorage.setItem('isLogin', true); // 테스트용

function App() {
    const isLogin = localStorage.getItem('isLogin');

    return (
        <div className="App">
            <Header />
            <Routes>
                {/* url이 3000이 아니라서 클라이언트쪽에서 특정 페이지로 이동하게 만들지 못함 */}
                <Route
                    path="/member/join/kakao"
                    element={<KakaoLogin />}
                ></Route>
                <Route exact path="/landing/login" element={<Login />}></Route>
            </Routes>
        </div>
    );
}
export default App;
