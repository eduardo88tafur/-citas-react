
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPaciente"
import Tafur from "./components/Tafur"
import Saludar from "./components/Saludar"
function App(){
    return(
      <div className="bg-slate-700 blur-2xl">
        <Header/>
        <ListadoPacientes/>
        <Tafur/>
        <Saludar/>
        </div>
    )
}
export default App
