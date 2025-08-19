import { useEffect } from 'react';
import './App.css';

// 매번 실행
function App() {
  useEffect(() => {
    // 실행할 작업, 컴포넌트가 화면에 렌더링될 때 실행
    console.log('컴포넌트가 마운트되었습니다!');

    return () => {
      // 정리 작업, 컴포넌트가 화면에서 제거될 때 실행
      console.log('컴포넌트가 언마운트되었습니다!');
    };
  }); // 의존성 배열 생략으로 매번 실행

  return <div>Hello, React!</div>;
}

export default App;
