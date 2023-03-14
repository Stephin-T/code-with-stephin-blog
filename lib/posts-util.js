
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles () {
    return fs.readdirSync(postsDirectory);
}

export function getPostsdata(postIdentifier){


    const postSlug = postIdentifier.replace(/\.md$/, ""); // for removing the file extension. returns a slug with a filename without extension


    const filePath =path.join(postsDirectory, `${postSlug}.md`)

    const fileContent = fs.readFileSync(filePath, "utf-8"); //for reading the content of that file  "utf-8" spo that we can support all unicode character

   const {data, content} = matter(fileContent);


   const postData = {

    slug : postSlug,
    ...data,
    content :content  // shortcut is just write content
   }

   return postData;
}

export function getAllPosts(){
    const postFiles = getPostsFiles();

   const allPosts = postFiles.map((postFile) => {
        return getPostsdata(postFile);
    });

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

    return sortedPosts;
}

export function getFeaturedPosts(){
    const allPosts = getAllPosts();

    const featuredPosts = allPosts.filter(post => post.isFeatured);

    return featuredPosts;

}