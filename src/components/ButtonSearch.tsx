import { ChangeEvent, useState } from "react";
import { CEPContext } from "../context/CEPContext"
import InputCidades from "../components/InputCidades";
import InputEstados from "../components/InputEstados";

export default function () {

    const [UF, setUF] = useState("")

    return <>
       <div className="modal">
                    <button className="bt-close">X</button>
                    <h1>Descobrir o CEP</h1>
                    <form>
                        <div>
                            <label>Coloque o Estado: </label>
                            <InputEstados setUF={setUF}/>
                        </div>
                        <div>
                           <label>Coloque a Cidade: </label>
                           <InputCidades UF= {UF}/>
                        </div>
                    </form>
                    
                    <div className="action">
                        <button className="bt-save">&#8594;</button>
                    </div>
                </div> 
        
    </>
}