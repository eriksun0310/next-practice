import "../styles/global.css"

// 要讓每一個頁面(Component)都套用的一樣的style
export default function App({Component, pageProps}){
    return <Component {...pageProps}/>
}