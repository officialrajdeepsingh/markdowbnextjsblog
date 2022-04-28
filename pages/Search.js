import Head from 'next/head'
import Post from '../components/Post'
import Banner from "../components/Banner";
import search from "../search.json";
import { useRouter } from 'next/router'



export default function Search() {
    const { query } = useRouter()
    const posts = []

    search.map(
        (post) => {
            if (post.frontmatter.draft === false) {
                if (post.frontmatter.title.toLowerCase().includes(query.q) || post.frontmatter.summary.toLowerCase().includes(query.q) || post.frontmatter.description.toLowerCase().includes(query.q)) {
                    posts.push(post)
                }
            }
        }
    )
    console.log(posts)

    return (
        <div>
            <Head>
                <title>Dev Blog</title>
            </Head>
            <Banner />
            <div className="container">
                <div className="row">

                    <div className="col-lg-8 m-auto">

                        {posts.map((post, index) => (
                            <Post key={index} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}