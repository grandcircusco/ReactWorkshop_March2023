import React, { useState } from 'react'
import { Post } from '../../types/posts'
import PostForm from '../PostForm/PostForm';
import PostInList from '../PostInList/PostInList';
import './SocialPosts.css';


export default function SocialPosts() {
  const [formVisible, setFormVisible] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);


  const onSubmitForm = (newPost: Post) => {
    setPosts(cur => [...cur, newPost])
  }


  const deletePost = (id: string) => {
    // removing any item from the array where the id matches
    setPosts(cur => cur.filter(item => item.id !== id))
  }

  return (
    <div className="social-posts">
      <button className="new-thought" onClick={() => setFormVisible(true)}>New Thought</button>
      {
        posts.length > 0 && 
          (<div className="posts-list">
            {posts.map(item => <PostInList key={item.id} deletePost={deletePost} post={item} />)}
          </div>)
      }
      {
        formVisible && (
          <PostForm onSubmitForm={onSubmitForm} setFormVisible={setFormVisible} />
        )
      }
    </div>
  )
}
