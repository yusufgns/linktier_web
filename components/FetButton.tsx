import React from "react"
import clsx from 'clsx'

interface InputsI {
    onChange: (e: any) => any,
    value: string | number | any,
    label: string | number | any,
    stores: any
}

const Inputs: React.FC<InputsI> = ({
    onChange,
    label,
    stores,
}: InputsI) => {
    return (
        <button
            onChange={onChange}
            type="button"
        >
            {label}
        </button>
    )
}

export default Inputs