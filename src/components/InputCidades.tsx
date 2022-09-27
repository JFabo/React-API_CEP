import React, { useEffect, useState } from "react"
import {CEPContext} from "../context/CEPContext"

export default function () {
    const [cidades, setCidades] = useState([])
    const {UF, cidade, setCidade} = React.useContext(CEPContext)        

    const [loading, setLoading] = useState(true)

    async function buscarCidades() {
        setLoading(true)
        if (!UF) return
        const requestCidades = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`)
        const cidades = await requestCidades.json()
        setLoading(false)
        setCidades(cidades)
    }

    useEffect(() => {
        buscarCidades()
    }, [UF])

    return <>
        {loading
            ? "coloque primeiro o estado"
            : <select>{cidades.map(({ nome }, idx) => <option key={idx}>{nome}</option>)}</select>
        }
    </>
}