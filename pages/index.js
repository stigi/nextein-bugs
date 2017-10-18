import Link from 'next/link'
import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'

const Index = (props) => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <p>Hello Nextin with {props.posts.length} Posts</p>
  </div>
)

export default withPosts(Index)
