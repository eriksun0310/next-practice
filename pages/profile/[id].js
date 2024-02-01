
/*
getStaticPaths(): 用於靜態生成不經常更改的內容

url: localhost:3000/profile/1
[id].js 代表對應id的頁面
*/
export async function  getStaticPaths(){
    const response = await fetch("http://localhost:8080/students")
    const data = await response.json()

    /* 這裡的paths 一定要符合Next.js 要求的格式
    1. getStaticPaths() 一定要return 一個paths屬性的物件
    2. paths 一定需要是一個array of objects
    3. 內部每個object 都需要有id 的屬性
    4. 每個id 都會需要被用來製作相對應的頁面
    */ 

    const paths = data?.map((d)=>{
        return {
            params:{
                id:d.id.toString()
            }
        }
    })
    return {
        paths, 
        fallback:false // 自動做出404 的頁面
    }
}

// 獲取學生個人資料
export async function getStaticProps({params}){
    // 根據學生id 去打api
    const response = await fetch(`http://localhost:8080/students/${params.id}`)
    const data = await response.json()
    return {
        props:{
            data 
        }
    }
}




/* 
getServerSideProps():  用於每次請求都需要動態生成的內容

url: localhost:3000/profile/10
params.id = 10
*/ 
export async function getServerSideProps({params}){
    const response = await fetch(`http://localhost:8080/students/${params.id}`)
    const data = await response.json()
    return {
        props:{
            data 
        }
    }
}

// 學生個人的頁面
export default function StudentProfile({data}){
    return(
        <div>
           <h1>{data.name}</h1>
           <h1>{data.age}</h1>
           <h1>{data.id}</h1>
           <h1>{data.scholarship.merit}</h1>
           <h1>{data.scholarship.other}</h1>
        </div>
    )
}