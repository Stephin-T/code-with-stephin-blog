import FeaturedPosts from '@/components/home-page/featured-posts';
import Hero from '@/components/home-page/hero';
import { getFeaturedPosts } from '@/lib/posts-util';
import React, { Fragment } from 'react';
import Head from 'next/head';

function HomePage(props) {

  return (
    <Fragment> 
    <Head>
      <title>Code with STEPHIN</title>
      <meta name="description" content="Discover the world of React and full stack development with our comprehensive blog site. Learn about the latest trends, techniques, and best practices to build high-performance and user-friendly web applications. "/>
    </Head>
        <Hero />
        <FeaturedPosts posts={props.posts}/>

    </Fragment>
  )
}


export function getStaticProps(){

    const featuredPosts = getFeaturedPosts(); 
    
    return {
        props : {
            posts : featuredPosts
        }
    }

}

export default HomePage;