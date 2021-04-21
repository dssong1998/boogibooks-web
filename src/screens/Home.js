import { useQuery } from "@apollo/client";
import Post from "../components/feed/Post";
import FEED_QUERY from "../components/queries/FeedQuery";

const Home = () => {
  const { data } = useQuery(FEED_QUERY);
  return (
    <div>
      {data?.seeFeed?.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          creator={post.creator}
          postImage={post.postImage}
          book={post.book}
          comment={post.comment}
          likes={post.likes}
          readingPages={post.readingPages}
          createdAt={post.createdAt}
        />
      ))}
    </div>
  );
};

export default Home;
