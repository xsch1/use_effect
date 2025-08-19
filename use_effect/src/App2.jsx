import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // 상태 정의: count라는 숫자 상태
  const [count, setCount] = useState(0);

  // count 값이 변할 때마다 콘솔과 문서 제목 업데이트
  useEffect(() => {
    console.log(`현재 카운트: ${count}`);
    document.title = `Count: ${count}`; // 브라우저 탭 제목도 변경
  }, [count]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>React Counter</h1>
      <p>Count: {count}</p>

      {/* 버튼들 */}
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
