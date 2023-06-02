import React from "react"
import clsx from 'clsx'

interface SituationI {
    value1: 'Over Due' | null,
    value2: 'Completing' | null,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    value: 'Empty' | 'Over Due' | 'Completing' | string,
}


const Situation: React.FC<SituationI> = ({
    value1,
    value2,
    onChange,
    value,
}) => {

    return (
        <select
            onChange={onChange}
            name="origin" 
            required
            value={value}
            className="h-[30px] rounded-md text-center bg-[#393E46] text-white outline-none font-medium">
            <option>Empty</option>
            <option>{value1}</option>
            <option>{value2}</option>
        </select>
    )
}

export default Situation