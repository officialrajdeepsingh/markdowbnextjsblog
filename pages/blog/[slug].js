import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import { slugify, ImageUrl } from '../../utils'
import { NextSeo } from 'next-seo';

export default function PostPage({ content, frontmatter }) {
  const date = new Date(frontmatter.date)
  const imageMeta= frontmatter.images.map(
      image  =>  {
       const imageUrl =  ImageUrl(image)
        return {
        url: imageUrl,
        width: 1224,
        height: 724,
        alt: frontmatter.title,
        type: 'image/jpeg',
      }
     }
    )

   
  return (
    <>
     <NextSeo
        title={frontmatter.title} 
        description={frontmatter.summary}
        openGraph={{
          url: 'https:officialrajdeepsingh.dev',
          title: frontmatter.title,
          description: frontmatter.summary ,
          type: 'article',
          article: {
            publishedTime: frontmatter.date,
            authors: [
              'https://officialrajdeepsingh.dev/pages/about',
            ],
            tags: frontmatter.tags,
          },
          images: imageMeta,
          site_name: 'Rajdeep Singh',
        }}      
      />
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-10 m-auto">
            <div className='card card-page'>
              <a href={`/blog/${frontmatter.slug}`} > <img className="card-img-top" src={ImageUrl(frontmatter.image)} alt="..." /></a>

              <h1 className='post-title mt-2 p-2'>{frontmatter.title}</h1>
              <div className='post-date m-1 p-2'>

                <div><h6>{`${date.getMonth() + 1} - ${date.getDate()} - ${date.getFullYear()}`} </h6>  </div>
                <div> {
                  frontmatter.categories.map(
                    category => {

                      const slug = slugify(category)

                      return (<Link key={category} href={`/category/${slug}`}>
                        <a className='btn'>
                          <h6 className=' post-title'>#{category}</h6>
                        </a>
                      </Link>)
                    }
                  )
                } </div>


              </div>

              <div className='post-body p-5 m-auto' dangerouslySetInnerHTML={{ __html: marked.parse(content) }}>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export async function getStaticPaths() {
  //  Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

   // Get slug and frontmatter from posts
  const temppaths = files.map((filename) => {

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    if (frontmatter.draft === false) {
      return {
        params: {
          slug: filename.replace('.md', ''),
        },
      }
    } else {
      return null
    }


  })
  //   remove null in tempPosts 
  const paths = temppaths.filter(
    path => {
      return path && path
    }
  )

  return {
    paths,
    fallback: false,
  }

}


export async function getStaticProps({ params: { slug } }) {

  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}