import { useParams } from "@tanstack/react-router";

const Post = () => {
  const { postId } = useParams({from: "/post/$postId"});
  return (
    <h1>{postId}</h1>
  )
}

export default Post;
