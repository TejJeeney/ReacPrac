import React, {useId} from 'react'

function Select({
    options,
    label,
    className = '', //user can add their own class while using this component
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label 
        htmlFor={id} className=''>{label}</label>}
        
        <select
        {...props} //spreading the props so that user can add their own props while using this component
        id={id}
        ref={ref}
        className={`w-full px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 ${className}`}
        >
            {options?.map((option) => ( //mapping through the options array to create options in select dropdown 
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>

    </div> 
)}

export default Select