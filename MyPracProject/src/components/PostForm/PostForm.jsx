import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from '../import.js'
import { Editor } from '@tinymce/tinymce-react'
import appwriteService from '../../appwrite/config.js'
import { useNavigate } from 'react-router-dom'


function PostForm({ post }) {
    const { register, handleSubmit, control, watch, setValue, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'acitve'
        }
    })
    const navigate = useNavigate()
    const userData = useSelector((state) => state.user.userData)
    const authStatus = useSelector((state) => state.auth.status)

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
                navigate(`/posts/${dbPost.slug}`)
            }
        }
        else {
            const file = await appwriteService.uploadFile(data.image[0])

            if (file) {
                const fileId = file.$id
                data.featuredImage = fileId
                const dbPost = await appwriteService.createPost({
                    ...data,
                    userId: userData.$id,
                })

                if (dbPost) {
                    navigate(`/posts/${dbPost.$id}`)
                }

            }
        }
    }
    return (
        <div>PostForm</div>
    )
}

export default PostForm