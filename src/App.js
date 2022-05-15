/*
  컴포넌트 함순느 한번에 하나의 JSX만 반환가능
  복수개의 요소를 반환할 때에는 wrapping tag로 감싸줒ㅁ
  불필요한 부모태그의 생성을 막기 위햇는 <></> (gragment)로 감싸줌
*/
import Header1 from './Header1';     //./ = 현재경로
import Footer1 from './Footer1';
import './scss/style.scss';

import { Header, Footer } from './Layout'

function App() {
  // window객체는 항상있는 전역요소이기 때문에 이벤트 연결 가능
  window.addEventListener('click', (e) => {
    //console.log(e.currentTarget);
    console.log(e.target);
  })

  /*
  // 실제 return문이 실행되기 전에는 가상돔 요소가 생성되지 않았으므로 이벤트 연결 불가
  const h1 = document.querySelector('h5');
  h5.addEventListener('click', (e) => {
    console.log(e.currentTarget)
  })
  */



  const handleClick = () => {
    alert('click2');
  }
  const handleArg = (txt) => {
    alert(txt);
  }


  return (
    <>
      <h5></h5>
      <h1>target vs e.currentTarget</h1>
      <h2>제목2</h2>
      <div className="App">
        {/* 하나의 가상돔 요소에 복수개의 이벤트 연결가능 */}
        <h1
          onMouseEnter={() => { console.log('mouseEnter') }}
          onMouseLeave={() => console.log('mouseLeave')} >Title</h1>
        <button onClick={() => alert('click')}>버튼1</button>
        <button onClick={handleClick}>버튼2</button>
        <button onClick={() => handleArg('innerText')}>버튼3</button>
      </div>
      <Header />
      <Footer />

      {/* <h1>Hello</h1> */}
      {/* ul.list>li*3  */}
      {/* <ul className="list">
        <li>list1</li>
        <li>list2</li>
        <li>list3</li>
      </ul> */}

      <h1>Hello</h1>


      <Header1 />
      <Footer1 />

    </>
  );
}

export default App;


//const domH1 = document.createElement('h1');
//domH1.innerText = 'Hello';


// e.currentTarget : 이벤트 객체가 바인딩 되어 있는 요소를 지칭
// e.tartget : 실제 이벤트가 발생한 대상을 지칭