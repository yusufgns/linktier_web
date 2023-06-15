import React from "react"
import clsx from 'clsx'

interface TextAreaI {
    type: 'bio' | 'des' | null,
    length: number | undefined,
    onChange: (e: any) => void,
    value: string | number | any,
    className?: string | null
}


const TextArea: React.FC<TextAreaI> = ({
    type,
    length,
    onChange,
    value,
    className
}) => {
    return (
        <span>
            {type === 'des' &&
                <textarea maxLength={length}
                    onChange={onChange}
                    placeholder="Description"
                    value={value}
                    className={clsx(
                        'outline-none',
                        type === 'des' && 'w-full h-[100px] min-h-[100px] max-h-[100px] p-[10px] rounded',
                        className
                    )} />
            }

            {type === 'bio' &&
                <textarea maxLength={length}
                    onChange={onChange}
                    placeholder="Biography"
                    value={value}
                    className={clsx(
                        'outline-none mt-[10px] bg-[#393E46]',
                        type === 'bio' && 'w-full h-[100px] min-h-[100px] max-h-[100px] p-[10px] rounded',
                    )} required />
            }
        </span>
    )
}

export default TextArea