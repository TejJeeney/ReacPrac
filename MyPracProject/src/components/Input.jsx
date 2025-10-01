import React, {forwardRef , use, useId} from 'react'

const Input = forwardRef( function Input({
    label,
    type = "text",
    className= "",
    ...props
} , ref) 
    {

        const id = useId()
    return (

        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1 font-medium italics'
            htmlFor={id}
            >
                {label}
            </label>}

            <input 
            className= {`w-full px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 ${className}`} 
            type={type}
            ref= {ref}
            id= {id} 
            {...props}
            />
        </div>
    )
    }


)

export default Input