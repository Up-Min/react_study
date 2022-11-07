import { Route, Routes } from 'react-router-dom';
import NewPage from './pages/NewPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewPage />} />
      {/* 위의 경로로 접근했을 떄 보여주고 싶은 페이지를 보여줌 */}
      <Route path="/:category" element={<NewPage />} />
      {/* 아직까지는 path에 뭘 넣어도 그냥 뉴스 페이지가 나오게 함 */}
    </Routes>
  );
}

export default App;
