import { useState } from "react";
import InputCidades from "../components/InputCidades";
import InputEstados from "../components/InputEstados";
import InputCEP from "../components/InputCEP";

export default function() {
    const [uf, setUf] = useState("")

    return <>
        <main>
        <h1>Registro de CEP</h1>
        <div className="action-bar">
            <p>Clique para: </p>
            <button className="bt-search" >PROCURAR</button>
            <button className='bt-add'>ADICIONAR</button>
        </div>

        <div className="container-data">
            <template className="local">
                <div className="modal">
                    <button className="bt-close">X</button>
                    <h1>Cadastrar Lugar</h1>
                    <form>
                        <div>
                            <label>Coloque o Estado: </label>
                            <InputEstados setUf={setUf}/>
                        </div>
                        <div>
                           <label>Coloque a Cidade: </label>
                           <InputCidades uf= {uf}/>
                        </div>
                    </form>
                    <div className="action">
                        <button className="bt-save">&#8594;</button>
                    </div>
                </div>
            </template>

            <template className="searching">
              <div className="mod-search">
                <h1>Procurar Lugar</h1>
                <label>Digite o CEP: </label>
                <button className="bt-searching">Procurar</button>
              </div>
            </template>
        </div>
        
        <br></br>
        <InputEstados setUf={setUf} />
        <br></br>
        <InputCidades uf={uf} />
        </main>
    </>
}