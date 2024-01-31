import { useEffect, useState } from "react";

export default function Profile(){

    const [data, setData] = useState(null)
    
    useEffect(()=>{
        const myFunction = async()=>{
            let response = await fetch("http://localhost:8080/students")
            let data = await response.json()
            setData(data)
        }
        myFunction()
       
    }, [])
    return(
      <div>
        {
            data && data?.map((d)=>{
                return<p>{d.name}</p>
            })
        }
      </div>
    )
}