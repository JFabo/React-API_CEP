import { useState } from "react";
import InputCidades from "../components/InputCidades";
import InputEstados from "../components/InputEstados";
import InputCEP from "../components/InputCEP";
import ButtonCEP from "../components/ButtonCEP";
import ButtonSearch from "../components/ButtonSearch";
import {CEPContext} from "../context/CEPContext"

export default function() {
    const [UF, setUF] = useState("")

    return <>
        <main>
        <h1>Registro de CEP</h1>

        <InputCEP/>
        <br></br>
        <InputEstados setUF={setUF} />
        <br></br>
        <InputCidades UF={UF} />

        <br/>

        <div className="action-bar">
            <p>Selecione o modo de busca: </p>
            <button className="bt-search" >CEP</button>
            <button className='bt-add'>UF/Cidade</button>
        </div>


        <div className="container-data">
         <ButtonCEP></ButtonCEP>
         <ButtonSearch></ButtonSearch>
        </div>

        </main>
    </>
}