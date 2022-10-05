import React, { useState } from "react"
import { CEPContext } from "../context/CEPContext"

export default function () {   

    const {setUF, setCidade, setCEP} = React.useContext(CEPContext)
    const [error, setError] = useState(false)
    const loadCEP = async (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.currentTarget.value.length < 9) return
        setCEP(ev.currentTarget.value)
        getLocal(ev.currentTarget.value)
    }

    const getLocal = async (CEP: string) => {
        const requestCode = await fetch(`https://viacep.com.br/ws/${CEP}/json/`)
        const responseCode = await requestCode.json()
        if(responseCode.error){
            setError(responseCode.error)
            return
        }
        setError(false)
        setUF(responseCode.UF)
        setCidade(responseCode.localidade)
    }

    const codeMask = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        ev.currentTarget.value = ev.currentTarget.value.replace(/\D/g, "")
        ev.currentTarget.value = ev.currentTarget.value.replace(/^(\d{5})(\d{3})/, "$1-$2")
    }

    return <>
        <div className="input-container">
        <input type="text" placeholder="*****-***" maxLength={8} onKeyUp={
                (ev) => {
                    codeMask(ev)
                    loadCEP(ev)
                }
            }/>
        </div>
        <span>
            {error
                ? "erro no CEP, repita o processo"
                : ""
            }
        </span>
    </>
}