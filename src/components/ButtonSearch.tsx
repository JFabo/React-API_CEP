import { ChangeEvent, useState } from "react";
import { CEPContext } from "../context/CEPContext"
import InputCidades from "../components/InputCidades";
import InputEstados from "../components/InputEstados";

export default function () {

    return <>
       <div className="modal">
                    <button className="bt-close">X</button>
                    <h1>Descobrir o CEP</h1>
                    <form>
                        <div>
                            <label>Coloque o Estado: </label>
                            <InputEstados/>
                        </div>
                        <div>
                           <label>Coloque a Cidade: </label>
                           <InputCidades/>
                        </div>
                    </form>
                    
                    <div className="action">
                        <button className="bt-save">&#8594;</button>
                    </div>
                </div> 
        
    </>
}