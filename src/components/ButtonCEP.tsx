import InputCEP from "../components/InputCEP";

export default function () {

    return <>
              <div className="mod-search">
                <h1>Procurar Lugar</h1>
                <label>Digite o CEP: </label>
                <InputCEP/>
                <button className="bt-searching">Procurar</button>
              </div>
    </>
}