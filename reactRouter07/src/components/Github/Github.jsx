import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router'


export const fetchDataFromGithub = async () => {
    const details = await fetch('https://api.github.com/users/TejJeeney')
    return details.json()
}

function Github() {
    const data = useLoaderData()
//     const [data, setData] = React.useState({})

//     useEffect(() => {
//         fetch('https://api.github.com/users/TejJeeney')
//             .then((res) => res.json())
//             .then(data => {
//                 console.log(data)
//                 setData(data)
//             })
//     }, [])

    return (
        <>
            <h1 className="text-2xl font-bold text-gray-600 m-4 p-4 center"> Your Github Profile </h1>
            <div>Github followers: {data.followers}
                <img className='rounded-full m-4' src={data.avatar_url} alt="profile pic" width="100" height="100" />
            </div>
        </>
    )
}

export default Github
