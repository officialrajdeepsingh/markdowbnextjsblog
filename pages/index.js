
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { NextSeo } from 'next-seo';
import Post from '../components/Post'
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar"
import { sortByDate, slugify,ImageUrl} from '../utils'

export default function Home({ posts }) {


  return (
    <div>
      <NextSeo
        title="Welcome to my blog home page"
        description="Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO support"
        openGraph={{
          url: 'http://officialrajdeepsingh.dev',
          title: 'Welcome to my blog home page',
          description: 'Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO support',
          images: [
            {
              url: `${ImageUrl('banner.png')}`,
              width: 1224,
              height: 724,
              alt: 'banner',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Rajdeep Singh',
        }}      
      />
        <Banner /> 
      <div className="container">
        <div className="row">

          <div className="col-lg-8">

            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}


          </div>

          <Sidebar />
          
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

 

  

  // Get slug and frontmatter from posts
  const tempPosts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)


    if (frontmatter.draft === false) {
      return {
        slug,
        frontmatter,
      }
    } else {
      return null
    }

  })

  //  remove null in tempPosts 
  const posts = tempPosts.filter(
    post => {
      return post && post
    }
  )
  const jsonString = JSON.stringify(posts)
  fs.writeFileSync('./search.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }


}


 
