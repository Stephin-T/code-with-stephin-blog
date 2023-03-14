import PostContent from '@/components/posts/post-detail/post-content'
import { getPostsdata, getPostsFiles } from '@/lib/posts-util';
import Head from 'next/head';
import React, { Fragment } from 'react'

function PostDetailPage(props) {
  return (
    <Fragment>
  
    <Head>
      <title>{props.post.title}</title>
      <meta name="description" />
    </Head>
    <PostContent post={props.post} />
    </Fragment>
  )
}


export function getStaticProps(context){

      const {params} = context;

      const {slug} = params;

      const postData = getPostsdata(slug);

      return {
        props:{
          post : postData
        },
           revalidate : 600 //ten minutes
      }
}

   export function getStaticPaths(){

      const postFileNames = getPostsFiles();

      const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ""));
        
    return {
      paths : slugs.map(slug =>({params :{slug : slug}})),
      fallback : false
    }
   }

export default PostDetailPage