import Head from "next/head"
import Link from "next/link"
import styles from './layout.module.css'

const name = 'erika'
const webSiteTitle = 'Next.js 練習網站'
export default function Layout({children, returnBack}) {
    return(
    <div className={styles.layout}>
        <Head>
            <meta  charSet="ut-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="erika"/>
        </Head>
        <header className={styles.header}>
            <h1>{webSiteTitle}</h1>
            <h2>{name}</h2>
        </header>
        <main>{children}</main>
        {
            returnBack && <Link  className={styles.home} href="/">回到首頁</Link>
        }
    </div>
    )
}