import React from "react"
import clsx from 'clsx'

interface InputsI {
    type: 'title' | 'username' | 'edit' | 'website' | 'entires' | string | null,
    placeholder: 'Full Name' | 'Web Site' | 'Link' | string,
    length: number | undefined,
    onChange: (e: any) => any,
    value: string | number | any
}

const Inputs: React.FC<InputsI> = ({
    type,
    length,
    placeholder,
    onChange,
    value
}: InputsI) => {
    return (
        <span>
            {type !== 'website'  && type !== 'entires' && 
                <input
                maxLength={length}
                placeholder={placeholder}
                onChange={onChange}
                type="text"
                value={value}
                required
                minLength={1}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                    e.preventDefault();
                    }
                }}
                className={clsx(
                    'h-[30px] outline-none focus:bg-[#393E46] bg-[#393E46]',
                    type === 'username' && 'w-[165px]',
                    type === 'edit' && 'w-[190px] h-[45px]  rounded-xl px-[15px]',
                    type === 'title' && 'w-full h-[45px]  rounded-lg px-[15px]',
                    type === 'links' && 'w-full h-[25px]  rounded text-[14px] px-[5px]',
                )}
                />
            }

            {type === 'entires' && 
                <input
                maxLength={length}
                placeholder={placeholder}
                onChange={onChange}
                type="text"
                value={value}
                minLength={1}
                required
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                    e.preventDefault();
                    }
                }}
                className={clsx(
                    'outline-none focus:bg-[#393E46] bg-[#393E46] w-full h-[45px] rounded-lg px-[15px]'
                )}
                />
            }

            {type === 'website' && 
                <input
                maxLength={length}
                placeholder={placeholder}
                onChange={onChange}
                type="text"
                value={value}
                minLength={1}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                    e.preventDefault();
                    }
                }}
                className={clsx(
                    'outline-none focus:bg-[#393E46] bg-[#393E46] w-full h-[45px] rounded-lg px-[15px]',
                )}
                />
            }
        </span>
    )
}

export default Inputs