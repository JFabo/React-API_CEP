export default function () {


    return <>
        <div className="input-container">
        <label htmlFor="input-code">Insira seu CEP</label>
        <input type="text" placeholder="*****-***" maxLength={9}/>
        </div>
    </>
}