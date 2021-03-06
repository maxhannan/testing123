import { useQuery } from '@apollo/client';
import { FETCH_POSTS_QUERY } from '../util/GQLQueries';
import { Spinner } from '@chakra-ui/react';
import { Center } from '@chakra-ui/layout';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import PostCard from '../Components/PostCard';

import FAB from '../Components/FAB';

const Feed = ({ history }) => {
  const { loading, error, data: { getPosts: posts } = {} } = useQuery(
    FETCH_POSTS_QUERY
  );

  if (error) return <p>{error}</p>;

  if (loading)
    return (
      <Center height="90vh" w="100vw">
        <Spinner size="lg" />
      </Center>
    );

  if (posts) console.log(posts);

  return (
    <>
      <ResponsiveMasonry
        style={{ width: '100%', marginBottom: '80px' }}
        columnsCountBreakPoints={{ 350: 1, 800: 2, 1100: 3 }}
      >
        <Masonry gutter="20px">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <FAB history={history} />
    </>
  );
};

export default Feed;
