

// url: localhost:3000/profile

// 名稱一定是 getStaticProps()
// 獲取所有學生資料
export async function getStaticProps(){
    const response = await fetch("http://localhost:8080/students")
    const data = await response.json()

    /*
    1. getStaticProps() 一定要return 一個物件
    2. 物件內的屬性一定要叫做props
    3. props 屬性會自動被Next.js 使用, 會變成下面function 的參數
    */
   return{
        props:{
            data
        }
   }
}

// props:{data} =  {data}
// 產生所有學生的頁面
export default function StaticGenerationPage({data}){
    return(
        <div>
            {
                data?.map((d)=>{
                    return <h1>{d.name}</h1>
                })
            }
        </div>
    )
}
