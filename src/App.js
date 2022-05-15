import './scss/style.scss';
/*
  가상돔 자체에 직접 객체형식으로 스타일 지정가능
  가상돔 요소에 이벤트르 연결시 e.target으로 이벤트가 발생한 가상돔 자신의 스타일 변경 가능
*/

function App() {
  const fontStyle = {
    fontSize: 50,
    color: 'ligtgreen',
    fontWeight: 'noraml',
    opacity: 0.5
  }

  return (
    <div className="App">

      <h1 style={{ color: 'orange' }}>가상돔에 직접 객체리터럴 형식으로 스타일 적용</h1>

      <h2 style={fontStyle}>이벤트 발생 시 이벤트가 발생한 대상을 참조해서 스타일 변경</h2>

      <h3 onClick={(e) => (e.target.style.color = 'red')}>이벤트 발생 시 이벤트가 발생한 대상을 참조해서 스타일 변경</h3>
    </div>
  );
}

export default App;

