import React, { useEffect, useState } from "react"
import {CEPContext} from "../context/CEPContext"

export default function () {
    const [Tcidades, setCidades] = useState([])
    const {UF, cidade, setCidade} = React.useContext(CEPContext)    
    const selecionarCidade = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        setCidade(ev.currentTarget.value)
    }    

    async function buscarCidades() {
        if (!UF) return
        const requestCidades = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`)
        const cidades = await requestCidades.json()
        setCidades(cidades)
    }

    useEffect(() => {
        buscarCidades()
    }, [UF])

    return <>
        {!UF
            ? "coloque primeiro o estado"
            :<div>
            <select onChange={selecionarCidade} value={cidade}>
                {Tcidades.map(({ nome }, idx) => <option key={idx} value={nome}>{nome}</option>)}
            </select>
             </div>
        }
    </>
}