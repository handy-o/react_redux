function Header() {
    return (
        <header>
            <h1>header</h1>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <h2>footer</h2>
        </footer>
    )
}

function Popup() {
    return (
        <aside>
            <h3>popup</h3>
        </aside>
    )
}

// 하나의 파일에서 여러개의 컴포넌트 함수를 객체로 묶어서 export 가능

export { Header, Footer, Popup }