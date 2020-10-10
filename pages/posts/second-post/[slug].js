import { Link, useRouter } from '../../../libraries'

const SecondPost = () => {
  const router = useRouter()
  console.log(router)
  return (
    <Link href={`/posts/last-post/tes`}>
      <p>second page redirect to last post</p>
    </Link>
  )
}

export default SecondPost
