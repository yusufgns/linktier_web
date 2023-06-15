import React from "react"
import clsx from 'clsx'

interface InputsI {
    type: 'title' | 'username' | 'edit' | 'website' | 'entires' | 'form' | string | null,
    placeholder: 'Full Name' | 'Web Site' | 'Link' | string,
    length: number | undefined,
    onChange: (e: any) => any,
    onClick?: (e: any) => any,
    value: string | number | any,
    className?: string | null
}

const Inputs: React.FC<InputsI> = ({
    type,
    length,
    placeholder,
    onChange,
    value,
    onClick,
    className
}: InputsI) => {
    return (
        <span>
            {type !== 'website' && type !== 'form' && type !== 'entires' && type !== 'edit' && type !== 'form2' &&
                <input
                    maxLength={length}
                    placeholder={placeholder}
                    onChange={onChange}
                    onClick={onClick}
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
                        type === 'edit' && 'w-[190px] h-[45px]  rounded px-[15px]',
                        type === 'title' && 'w-full h-[45px]  rounded px-[15px]',
                        type === 'links' && 'w-full h-[25px]  rounded text-[14px] px-[5px]',
                        className
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
                        'outline-none focus:bg-[#393E46] bg-[#393E46] w-full h-[45px] rounded px-[15px]',
                        className
                    )}
                />
            }

            {type === 'form' &&
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
                        'invalid:border-red-500 outline-none focus:bg-[#393E46] bg-[#393E46] w-full h-[45px] rounded px-[15px]',
                        className
                    )}
                />
            }

            {type === 'form2' &&
                <input
                    maxLength={length}
                    placeholder={placeholder}
                    onChange={onChange}
                    type="text"
                    value={value}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                        }
                    }}
                    className={clsx(
                        'invalid:border-red-500 outline-none focus:bg-[#393E46] bg-[#393E46] w-full h-[45px] rounded px-[15px]',
                        className
                    )}
                />
            }

            {type === 'edit' &&
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
                        'outline-none focus:bg-[#393E46] bg-[#393E46] w-full h-[45px] rounded px-[15px]',
                        className
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
                        'outline-none focus:bg-[#393E46] bg-[#393E46] w-full h-[45px] rounded px-[15px]',
                        className
                    )}
                />
            }
        </span>
    )
}

export default Inputs