import React, {forwardRef , useId} from 'react'

const Input = forwardRef( function Input({ // using forwardRef to forward the ref from parent component into this component
    label,
    type = "text",
    className= "",
    ...props
} , ref) 
    {

        const id = useId()
    return (

        <div className='w-full'>
            {label && <label // label only rendered if it has any value
            className='inline-block mb-1 pl-1 font-medium italics'
            htmlFor={id}
            >
                {label}
            </label>}

            <input 
            className= {`w-full px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 ${className}`} 
            type={type}
            ref= {ref} //using the ref forwarded from the parent component
            id= {id}  // assigning the unique id generated to the input field so that it can be linked to the label
            {...props}
            />
        </div>
    )
    }


)

export default Input
