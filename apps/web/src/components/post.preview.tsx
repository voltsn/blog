import { Link } from "@tanstack/react-router";

interface PostPreviewProps {
  id: string,
  title: string,
  description: string,
  publishedDate: Date,
}
const PostPreview = (props: PostPreviewProps) => {
  return (
    <article>
      <header>
        <h1>{props.title}</h1>
        <p>published 
          <time dateTime={props.publishedDate.toLocaleString()}>
            {props.publishedDate.toString()}
          </time>
        </p>
      </header>
      <div>
        <p>{props.description}</p>
      </div>
      <button>
        <Link to="/post/$postId"
          params={{postId: props.id}}
        >
          Read
        </Link>
      </button>
    </article>
  )
}

export default PostPreview;
