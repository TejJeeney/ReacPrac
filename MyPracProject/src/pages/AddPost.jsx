import React from 'react'
import { PostForm, Container} from '../components/import'

function AddPost() {
  return (
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export { AddPost }