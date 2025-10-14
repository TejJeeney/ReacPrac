import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form' // imported taki this component can be called/referenced and controlled by the react hook-form.
import conf from '../conf/conf'

function RTE({
    name,
    control,
    label = '',
    defaultValue = '',
    className = '',
    ...props
}) {
    return (
        <div className='w-full'>

            {label && <label className='inline-block mb-1 pl-1 mt-2'> {label} </label>}

            <Controller
                name={name || 'name'}
                control={control}
                label={label || 'Label'}
                className={`border border-gray-200 rounded-lg ${className}`}
                defaultValue={defaultValue}
                render={({ field: { onChange } }) => ( //ye field onChange ko destructure kar raha hai taki jab chnage ho use use kar sake.
                    <Editor
                        apiKey={conf.tinymceApiKey} //yha pe apna api key dena hai from tinymce
                        {...props} //spreading the props so that user can add their own props while using this component
                        initialState={defaultValue || '<p>This is the initial content of the editor</p>'}
                        init={{
                            height: 500,
                            menubar: true,
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                            plugins: [
                                'advlist',
                                'anchor',
                                'autolink', 'lists',
                                'link',
                                'image', 'charmap', 'preview',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table',
                                'code',
                                'help', 'wordcount'
                            ],
                        }}
                        onEditorChange={onChange}
                    />


                )}


            />

        </div>
    )
}

export default RTE