import Link from "next/link"
import Layout from "@/components/layout"

/*
使用<a>(會重整): 網站之外的連結(ex:YouTube)
使用<Link>(不會): 自己網站內部的router
*/ 
export default function Home(){
  return<Layout>
    <div>
      <h1>這是網站首頁</h1>
      {/* 使用<a>: 網站之外的連結(ex:YouTube)  */}
      {/* <a href="/posts/edit-post">編輯post</a> */}

      {/* 使用<Link>: 自己網站內部的router  */}
      <Link href="/newPage">這是新的頁面</Link>

      <Link href="/posts/edit-post">編輯post</Link>
    </div> 
  </Layout>
}