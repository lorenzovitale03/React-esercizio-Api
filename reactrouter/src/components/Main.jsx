import { useEffect, useState } from "react";

const Main = () => {

    const [search, setSearch] = useState("")
    const [data, setData] = useState([])


    const fetchData = async () =>{
        const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + search)
        const data = await response.json();
        setData(data) //imposta lo stato interno del componente
        console.log(data);
    }

    useEffect(() => {
        if(search.length > 2){
            fetchData()
        }
    },[search])


    return (
        <div>
            <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <h1>Risultati della ricerca</h1>
            <ul>
                {data.length > 0 && data.map((data) => {
                    <li key={data.id}>{data.title} - {data.duration} - {data.rank} - <Link to={`/artist/${data.artist.id}`}>Scheda Artista</Link></li>
                })}
            </ul>
        </div>
    )
}

export default Main;