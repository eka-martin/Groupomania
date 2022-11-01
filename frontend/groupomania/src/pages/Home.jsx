import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import axios from '../axios';
import { useDispatch } from 'react-redux';
import { Post } from '../components/Post';
import { TagsBlock } from '../components/TagsBlock';
import { CommentsBlock } from '../components/CommentsBlock';
import { fetchPosts } from '../redux/slices/posts';

export const Home = () => {
const dispatch = useDispatch();
  React.useEffect(() => {
dispatch(fetchPosts())
  }, [])
  return (
    <>
      <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="Nouveaux" />
        <Tab label="Populaires" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {[...Array(5)].map(() => (
            <Post
              id={1}
              title="Augmentation du chiffre d'affaires trimestriel de l'entreprise"
              imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
              user={{
                avatarUrl:
                  'https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png',
                fullName: 'Keff',
              }}
              createdAt={'12 juin 2022'}
              viewsCount={150}
              commentsCount={3}
              tags={['communication', 'rh', 'chiffres']}
              isLoading={true}
              isEditable
            />
          ))}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock items={['communication', 'rh', 'chiffres']} isLoading={false} />
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
