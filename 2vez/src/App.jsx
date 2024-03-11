import Titulo from "./titulo"

function app(){
  return (
      <div>
        <Titulo cor="red" nome="Toreto" paragrafo={true}/>
        <Titulo cor="blue"/>
        <Titulo cor="purple"/>
        <Titulo cor="orangered"/>
      </div>
  )
  
}
export default app