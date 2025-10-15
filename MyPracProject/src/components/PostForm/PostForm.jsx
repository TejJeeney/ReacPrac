import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from '../import.js'
import { Editor } from '@tinymce/tinymce-react'
import appwriteService from '../../appwrite/config.js'
import { useNavigate } from 'react-router-dom'


function PostForm({ post }) {
    const { register, handleSubmit, control, watch, setValue, getValues } = useForm({
        defaultValues: { //default values set karne ke liye
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'acitve'
        }
    })
    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)
    // authStatus not needed here — removed to avoid unused variable warning

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? appwriteService.uploadFile(data.image[0]) : null

            if (file) {
                appwriteService.deleteFile(post.featuredImage)
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,

            })

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }
        }
        else {
            const file = await appwriteService.uploadFile(data.image[0])

            if (file) {
                const fileId = file.$id // we use "$id" insted of "id" because in appwrite it is aimed as $id 
                data.featuredImage = fileId
                const dbPost = await appwriteService.createPost({
                    ...data,
                    userId: userData.$id,
                })

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                    console.log(`Post created with ID: ${dbPost.$id}`)
                }

            }
        }
    }

    const slugTransform = useCallback((value) => {
        if (!value || typeof value !== 'string') return ''
        // normalize
        let s = value.trim().toLowerCase()
        // replace whitespace with hyphens
        s = s.replace(/\s+/g, '-')
        // remove invalid chars (only allow a-z, 0-9, dot, hyphen, underscore)
        s = s.replace(/[^a-z0-9._-]/g, '')
        // remove leading non-alphanumeric characters (can't start with special char)
        s = s.replace(/^[^a-z0-9]+/, '')
        // cap length at 36
        if (s.length > 36) s = s.substring(0, 36)
        return s
    }, [])

    useEffect(() => { // to auto generate slug from the given/said title
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title,
                    { shouldValidate: true }))
            }
        })

        return () => {
            subscription.unsubscribe() //it unsubscribes whrn component is unmounted
        }

    }, [watch, slugTransform, setValue])

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug",
                            slugTransform(e.currentTarget.value),
                            { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif, image/webp, image/svg+xml"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-pink-500" : undefined} className="hover:bg-pink-600 cursor-pointer w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm