import Link from "next/link";

export async function getStaticProps(){
    const response = await fetch("http://localhost:8080/students")
    const data = await response.json()
   return{
        props:{
            data
        }
   }
}


export default function Profile({data}){
    return(
      <div>
        {
            data && data?.map((d)=>{
                return<Link style={{padding:'2rem'}} href={`/profile/${d.id}`}>{d.name}</Link>
            })
        }
      </div>
    )
}