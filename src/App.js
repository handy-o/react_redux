import './scss/style.scss'
import { useState } from 'react'

function App() {
  console.log('App');

  // 리액트 컴포넌트는 내부에 있는 state값이 변경될 때 자동으로 재렌더링됨
  // useState - 컴포넌트 내부에서 state를 생성하고 해당 state를 변경할 수 있는 함수를 생성하는 hook
  // 리액트에서 화면의 변화를 관장하는 모든 정보값을 무조건 state에 담아서 관리
  // 배열이나 객체같은 참조형 자료값은 무조건 전개연산자로 기존 값을 deep copy한 다음에 state 변경함수로 바꿔치기 해야함

  // const [초기값, 변경된값]
  //const abc = useState('변경 전');
  //console.log(abc);

  const [data, setData] = useState('변경 전');
  let [data2, setData2] = useState('변경 전');

  const arr = ['red', 'green', 'blue'];
  const [colors, setColors] = useState(arr);
  return (
    <div className="App">
      {/* 버튼 클릭 시 state변경함수로 기존 state값 수정 */}
      <button onClick={() => setData('변경 후')}>{data} useState로</button>


      <button onClick={() => {
        //data2 = '변경 후'; // setData2 를 사용하지 않으면 변경된 값으로 바뀌지 않음
        //console.log(data2);
        setData2('이게 변경되어야 함');
      }}>{data2} 스크립트로 </button>

      <h3 className="titleHowto">배열로 변경하기</h3>
      <button onClick={() => {
        /*         
        colors[0] = 'hotpink';
        setColors(colors);
        // 이렇게만 해서는 화면에 변경되어 풀력되지 않는다.
        // 왜? 불변성을 해치고 원본이 바뀌어서 참조x
        // 해결 ? spread 연산자로 기존 배열을 완전 복사한 뒤

        // 불편성 (immutable)
        // - 리액트에는 특정 스테잍 값을 변경할 때 절대 원본으 훼손하지 않고
        // 복사본을 만들어야됨 (참조형 자료일 때)
        */
        // => 기존의 참조형 자료값을 deep copy
        const newColors = [...colors];
        newColors[0] = 'hotpink';
        setColors(newColors);


        //setColors(['aqua', 'yellow', 'orange']);
      }}>배열 state변경</button>

      <ul>
        {colors.map((color, idx) => (
          <li key={idx}>{color}</li>
        )
        )}
      </ul>
    </div >
  );
}

export default App;

