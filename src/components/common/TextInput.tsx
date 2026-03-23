interface TextInputProps {
    value:string;
    onChange:(val:string) => void;
    placeholder?:string;
}

export function TextInput({value, onChange, placeholder}:TextInputProps) {
    return(
        <input
            type="text"
            className="common-input"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            style={{padding:"5px"}}
        />
    );
}