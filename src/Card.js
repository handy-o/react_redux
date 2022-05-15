// 상위 컴포넌트의 props값 가져오기

function Card({ img, path }) {
    //function Card({ props }) {
    // 부모 컴포넌트에 전달한 props값을 객체로 받음
    //console.log(props)
    return (
        <article>
            <h1>Card</h1>
            {/* <img src={`${props.path}/img/${props.img}.png`} alt={props.img} width="100px" /> */}
            <img src={`${path}/img/${img}.png`} alt={img} width="100px" />
        </article>
    )
}

export default Card