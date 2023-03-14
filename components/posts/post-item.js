import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
import classes from "./post-item.module.css"

function PostItem(props) {

     const {title, image, excerpt, date, slug} = props.post;  //slug for the path

     const formattedDate = new Date(date).toLocaleDateString("en-US", {
        day : "numeric",
        month :"long",
        year : "numeric"
     });
  
          const imagePath = `/images/posts/${slug}/${image}`;
          const linkPath  = `/posts/${slug}`;

  return (
    <li className={classes.post}>
        <Link href={linkPath}>
            <div className={classes.image}>
                <Image  src={imagePath} alt={title} width={300} height={200} layout="responsive" />
            </div>
            <div className={classes.content}>
                <h3>{title}</h3>
                <time>{formattedDate}</time>
                <p>{excerpt}</p>
            </div>
        </Link>
    </li>
  )
}

export default PostItem;