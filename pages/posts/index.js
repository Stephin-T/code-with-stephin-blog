import AllPosts from '@/components/posts/all-posts';
import { getAllPosts } from '@/lib/posts-util';
import Head from 'next/head';
import React, { Fragment } from 'react';



function AllPostsPage(props) {
  return (
    <Fragment>
    <Head>
      <title>All Posts</title>
      <meta name="description" content="You can find all my posts here"/>
    </Head>
    <AllPosts posts={props.posts}/>
    </Fragment>
  )
}





  export function getStaticProps(){

       const allPosts = getAllPosts();

       return {
        props:{
          posts : allPosts
        }
       }
  }

export default AllPostsPage;