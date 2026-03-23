interface ButtonProps {
    label:string;
    onClick: () => void;
    disabled:boolean;
}

export function Button({label, onClick, disabled}:ButtonProps) {
    return (
        <button
            className="common-button"
            onClick={onClick}
            disabled={disabled}
            style={{marginLeft:"8px", padding:"5px 15px"}}
        >
            {label}
        </button>
    )
}