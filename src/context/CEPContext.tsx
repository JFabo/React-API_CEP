import React, {useState} from "react"

interface iPlace
{
    UF: string,
    setUF: React.Dispatch<React.SetStateAction<string>>,
    cidade: string,
    setCidade: React.Dispatch<React.SetStateAction<string>>,
    CEP: string,
    setCEP: React.Dispatch<React.SetStateAction<string>>
}

export const CEPContext = React.createContext({} as iPlace)
export default function CEPContextProvider(props: React.PropsWithChildren) 
{
    const [UF, setUF] = useState("")
    const [cidade, setCidade] = useState("")
    const [CEP, setCEP] = useState("")
    
    return (
        <CEPContext.Provider value=
          {{CEP, setCEP, UF, setUF, cidade, setCidade}}
        >
          {props.children}
        </CEPContext.Provider>
      )
}
  