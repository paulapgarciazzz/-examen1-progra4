import { useState, useEffect } from "react";


export default function RepuestosPage(){
    const key = import.meta.env.VITE_MASTER_KEY;
    const [repuestos, setRepuestos] = useState([]);
    console.log("key:", import.meta.env.VITE_MASTER_KEY);

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await fetch("https://api.jsonbin.io/v3/b/69e535e236566621a8ce210a ", {headers: {"X-Access-Key": key}});
                if (!response.ok) throw new Error (`HTTP error! status: ${response.status}`); 
                const data = await response.json();
                console.log("DATA:", data);
                setRepuestos(data.record);
            }catch(error){
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    },[])

    return(
        <div>
            <h1>Repuestos</h1>
            <ul>
                {repuestos.map((repuesto,index) => (
                    <li key={index}>{repuesto.nombre ?? JSON.stringify(repuesto)}</li>
                ))}
            </ul>
        </div>
    );
}
