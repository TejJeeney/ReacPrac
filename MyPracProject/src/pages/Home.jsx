import React from 'react'
import { useEffect, useState } from 'react'
import { Container, PostCard } from '../components/import'
import { useNavigate } from 'react-router-dom'
import appwriteService from '../appwrite/config'

function Home() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        appwriteService.getPosts()
            .then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                }
            })
    }, [])

    if (posts.length === 0) {
        return (
            <Container>
                <p className='text-center bg-amber-100'>No posts found. Please log in &nbsp;
                    <span className='text-primary  cursor-pointer hover:underline hover:text-blue-500 hover:bg-amber-200' onClick={() => navigate('/login')}>
                        here
                    </span>
                </p>
            </Container>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='w-full md:w-1/2 lg:w-1/3 p-2'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export { Home }