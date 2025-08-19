import { useState, useEffect } from 'react';
import './App.css';

// 외부 데이터 가져오기
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // API 호출, 컴포넌트가 렌더링될 때 API를 호출하여 데이터를 가져옴
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json()) // JSON 파싱
      .then((data) => setData(data)); // 파싱된 데이터가 넘어오면 setData() 함수 실행하여 화면에 표시
  }, []); // 빈 배열: 마운트 시 한 번만 실행

  return (
    <div>
      <h1>{data ? data.title : 'Loading...'}</h1>
    </div>
  );
}

export default App;
