import React from 'react'
import {useState, useEffect} from 'react'
import {Container, PostCard} from '../components/import'
import {PostForm} from '../components/import'
import { useNavigate, useParams } from 'react-router-dom'
import appwriteService from '../appwrite/config'

function EditPost() {
    const navigate = useNavigate();
    const [post, setPost] = useState([])
    const {slug} = useParams(); //to fetch the slug from the url

    useEffect(() => {
        if(slug){ //agar slug present hai tabhi fetch karna hai useffect ke andar
            appwriteService.getPost(slug)
            .then((post)=> {
                if(post) {
                    setPost(post)
                }
            } )
        }
        else {
            console.log("No slug found here")
            navigate('/') //if no slug => navigate to default home
        }
    }, [slug, navigate])
    
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post = {post} />
        </Container>

    </div>
  ) : null
}

export { EditPost }