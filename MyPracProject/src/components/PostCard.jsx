import React from 'react'
import appwriteService from '../appwrite/config' // to import the methods from appwrite config file
import { Link } from 'react-router-dom'


function PostCard({
    $id, //cause in appwrite id is taken in as $id (noi id) and with a "$" sign
    title,
    featuredImage // coming from database in appwrite
}) {

  return (
    <Link to = {`/post/${$id}`}>
        <div className='w-full border border-gray-200 rounded-xl p-4'>
      <div className="justify-center mb-4 rounded-lg ">
        {featuredImage ? (
          <img
            // import the filePreview method from appwrite config file
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        ) : (
          <div className="w-full h-40 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
            No image
          </div>
        )}
      </div>
            <h2 className='font-bold text-xl italic'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard