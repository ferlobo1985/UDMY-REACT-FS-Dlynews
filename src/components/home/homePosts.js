import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchPosts } from '../../store/utils/thunks'


const HomePosts = () => {
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(fetchPosts({page:1,order:"desc",limit:6}))
    },[])

    return(
        <>
            home posts
        </>
    )
}

export default HomePosts;