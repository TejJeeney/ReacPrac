import React from 'react'
import { PostForm, Container} from '../components/import'

function AddPosts() {
  return (
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPosts