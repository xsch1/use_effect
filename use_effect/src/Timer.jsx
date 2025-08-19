import { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    // Timer 컴포넌트가 마운트되면 setInterval을 통해 타이머가 시작, 1초마다 time 값이 증가하며 화면에 표시

    console.log('Timer started');

    return () => {
      // 정리 작업은 리소스를 해제하거나 이벤트를 제거하는 데 사용
      // app4.jsx에 있는 버튼을 클릭하면 showTimer가 false로 변경되어 Timer 컴포넌트가 화면에서 제거되면서 return의 내부코드가 실행되며 타이머가 정리
      clearInterval(interval); // setInterval() 제거하는 함수
      console.log('Timer cleared');
    };
  }, []);

  return <p>Time: {time}s</p>;
}

export default Timer;
