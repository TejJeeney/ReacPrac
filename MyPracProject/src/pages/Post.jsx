import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import appwriteService from '../appwrite/config'
import { Container, Button, PostCard } from '../components/import'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import parse from 'html-react-parser'


function Post() {
    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    const userData = useSelector((state) => state.auth.userData)
    const isAuthor = post && userData ? post.userId === userData.$id : false //authentication check ki user is author of the post or not

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug)
                .then((post) => {
                    if (post) setPost(post)
                    else navigate('/')
                })
        }
        else {
            navigate('/')
        }
    }, [slug, navigate])

    const deletePost = () => {
        appwriteService.deletePost(post.$id)
            .then((status) => {
                if (status) {
                    appwriteService.deleteFile(post.featuredImage)
                    navigate('/')
                }

            })
    }


    return post ? (
        <div className='py-8'>
            <Container>
                <div className='w-full flex justify-center mb-4 relative border rounded -xl p-2'>
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className='rounded-xl'
                    />

                    {isAuthor && ( //display => edit and delete button only if the user is the author of the post
                        <div className='absolute right-6 top-6'>
                            <Link to={`/edit-post/${post.slug}`}>
                                <Button
                                    bgColor="bg-green-500"
                                    className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button
                                bgColor="bg-red-300"
                                onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className='w-full mb-6'>
                    <h1 className='text-2xl font-bold mb-3'>{post.title}</h1>
                </div>
                <div className='browser-css w-full prose lg:prose-xl'>
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null
}

export { Post }