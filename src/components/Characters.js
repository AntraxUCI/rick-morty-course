
export default function Characters( props ) {
   const { characters, setCharacters } = props;
// esta funcion hace a los caracteres null por lo q te lleva nuevamente a la pagina principal
//o sea que si existen caracteres te los muestra sino te sigue mostrando la pagina principal
   const resetCharacters = () =>{
     setCharacters(null);
   }

  return (
    <div className="characters" onClick={resetCharacters}>
     <h1>Personajes</h1>
     <span className="back-home">Volver a la home</span>
     <div className="container-characters">
        {characters.map((character, index)=>(
            <div className="character-container" key={index}>
             <div >
                <img src={character.image} alt={character.name}/>
             </div>
             <div>
                <h3>{character.name}</h3>
                <h6>
                    {character.status === "Alive" ?(
                        <>
                        <span className="alive" />
                        Alive
                        </>
                    ):(
                        <>
                        <span className="dead" />
                        Dead
                        </>
              ) }
                </h6>
                    <p>
                       <span className="text-grey">Episodios: </span>
                       <span>{character.episode.length }</span> 
                    </p>
                    <p>
                        <span className="text-grey">Especie: </span>
                        <span>{character.species}</span>
                    </p>
             </div>
            </div>
        ))}
     </div> 
     <span className="back-home" onClick={resetCharacters}>Volver a la home</span>
    </div>
  )
}
