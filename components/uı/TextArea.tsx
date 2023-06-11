import React from "react"
import clsx from 'clsx'

interface TextAreaI {
    type: 'bio' | 'des' | null,
    length: number | undefined,
    onChange: (e: any) => void,
    value: string | number | any
}


const TextArea: React.FC<TextAreaI> = ({
    type,
    length,
    onChange,
    value
}) => {
    return (
        <span>
            {type === 'des' &&
                <textarea maxLength={length}
                    onChange={onChange}
                    placeholder="Description"
                    value={value}
                    className={clsx(
                        'outline-none mt-[10px] bg-[#393E46]',
                        type === 'des' && 'w-[610px] h-[100px] min-h-[100px] max-h-[100px] p-[10px] rounded'
                    )} />
            }

            {type === 'bio' &&
                <textarea maxLength={length}
                    onChange={onChange}
                    placeholder="Biography"
                    value={value}
                    className={clsx(
                        'outline-none mt-[10px] bg-[#393E46]',
                        type === 'bio' && 'w-[610px] h-[100px] min-h-[100px] max-h-[100px] p-[10px] rounded',
                    )} required />
            }
        </span>
    )
}

export default TextArea