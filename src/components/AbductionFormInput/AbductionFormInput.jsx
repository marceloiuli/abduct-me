export default function AbductionFormInput({inputProps}) {
    const {htmlFor, label, onChange, type, id, name, placeholder, value} = inputProps
    return (
        <>
            <label htmlFor={htmlFor}>{label}</label>
            <input onChange={(evt)=>onChange(evt)} type={type} id={id} name={name} placeholder={placeholder} value={value ? value : ''} />
        </>
    )    
}