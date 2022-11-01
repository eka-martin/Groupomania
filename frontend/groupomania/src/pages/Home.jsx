import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import axios from '../axios';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../components/Post';
import { TagsBlock } from '../components/TagsBlock';
import { CommentsBlock } from '../components/CommentsBlock';
import { fetchPosts, fetchTags } from '../redux/slices/posts';

export const Home = () => {
  const dispatch = useDispatch();
const { posts, tags} = useSelector(state => state.posts);

const isPostsLoading = posts.status === 'loading';
const isTagsLoading = tags.status === 'loading';

  React.useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchTags())
  }, [])
  return (
    <>
      <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="Nouveaux" />
        <Tab label="Populaires" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) => 
          isPostsLoading ? (
            <Post key={index} isLoading={true} />
            )  : (<Post
              id={obj._id}
              title={obj._title} //"Augmentation du chiffre d'affaires trimestriel de l'entreprise"
              imageUrl="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              user={obj.user}
              createdAt={obj.createdAt}
              viewsCount={obj.viewsCount}
              commentsCount={3}
              tags={obj.tags}
              isLoading={true}
              isEditable
            />)
          )}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock items={tags.items} isLoading={isTagsLoading} />
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: 'Jean-Paul Martin',
                  avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
                },
                text: 'Ceci est un commentaire test.',
              },
              {
                user: {
                  fullName: 'Guillaume Fouquet',
                  avatarUrl: 'https://mui.com/static/images/avatar/2.jpg',
                },
                text: "Lors de l'affichage de trois lignes ou plus, l'avatar n'est pas aligné en haut. N'oublie pas définir l'accessoire pour aligner l'avatar en haut!!!!!",
              },
            ]}
            isLoading={false}
          />
        </Grid>
      </Grid>
    </>
  );
};
