import './scss/style.scss';
import pic1 from './img/rank-1.png'
import { faImages } from '@fortawesome/free-regular-svg-icons';
import Card from './Card'
/*
  리액트 컴포넌트에서 이미지소스 불러오는 방법
  scr : 각각의 이미지를 import한 다음에 이미지 태그의 src 속성에 적용 (단점: 모든 컴포넌트 파일마다 일일히 import)
  public : public폴더 안쪽에 있는 이미지들을 process.env.PUBLIC_URL 구문으로 public 폴더까지의 절대경로를 구해 직접 출력하는 방법

*/

function App() {
  const colors = ['aqua', 'orange', 'lightgreen', 'hotpink']
  let isPop = true; // boolean 값은 let

  //이미지 명만으로 배열 생성
  const path = process.env.PUBLIC_URL;
  const imgs = ['rank-1', 'rank-2', 'rank-1'];

  return (
    <div className="App">
      <h3 className="titleHowto">배열로 하나씩 스타일 적용</h3>
      <ul>
        <li style={{ color: colors[0] }}> aqua </li>
        <li style={{ color: colors[1] }}> orange </li>
        <li style={{ color: colors[2] }}> lightgrenn </li>
        <li style={{ color: colors[3] }}> hotpink </li>
      </ul>

      <br />

      <h3 className="titleHowto">map을 이용하여 반복문으로 변경</h3>
      {/* map안에는 콜백함수 들어감 */}
      <ul>
        {colors.map((color, idx) => {
          const style = { color: color }
          // 가상돔을 반복돌 때에는 무조건 key값에 고유값을 부여해야 한다. (사실 idx 번호로는 잘 넣지 않음..) 
          return <li key={idx} style={style}>{color}</li>;
        })}
      </ul>

      <br />
      <hr />
      <br />

      {/* return문 안쪽에서 삼항연산자를 이용하여 가상돔 출력을 분기처리 가능 */}
      <h3 className="titleHowto">3항 연산자로 조건문 처리</h3>
      {isPop ? <aside>Popup</aside> : null}

      <br />
      <hr />
      <br />

      <h3 className="titleHowto">이미지처리</h3>
      <img src={pic1} alt="test img" width="100px" />

      <h3 className="titleHowto">public으로 이미지 처리</h3>
      {
        imgs.map((img, idx) => (
          // 화살표 뒤에 괄호로 return문 생략 가능
          // public 폴더까지의 경로값을 구해서 바로 이미지 소스 호출 가능
          // <img key={idx} src={path + '/img/' + img + '.png'} />
          <img key={idx} src={`${path}/img/${img}.png`} alt={img} width="100px" />
        )
        )
      }

      <br />
      <hr />
      <br />
      <h3 className="titleHowto">props 전달하여 map으로 이미지 불러오기</h3>
      <section>
        {imgs.map((img, idx) => {
          return (
            // 부모에서 자식 컴포넌트로 특정값을 전달할 때에는 props로 전달
            // key값은 props로 전달 x 
            <Card key={idx} img={img} path={path} />
          )
        })}
      </section>

    </div >
  );
}

export default App;

