import PostPreview from '../components/post.preview';

const HomePage = () => {
  const post = {
    id: "124",
    title: "Hello rust",
    description: "Some random text",
    publishedDate: new Date()
  };
  return (
    <>
      <h1> This is the home page </h1>
      <PostPreview {...post}/>
    </>
  )
}

export default HomePage;
