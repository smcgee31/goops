import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Container, List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import Title from './components/title';

const Credits = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>This entire project is a shameless copy 😳</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              A while back while looking for some online help for a git problem I was having I came
              across a site created by Seth Robertson titled "
              <a href="https://sethrobertson.github.io/GitFixUm/fixup.html" target="_blank">
                On undoing, fixing, or removing commits in git
              </a>
              " and I really loved the completeness of his work, but I thought, "If this is going to
              be a pick your own adventure style website what if it was shown in smaller bite-sized
              pages?" So I created this site. The content is all Seth Robertson's and he should
              absolutely get all the credit he deserves for it. Many of the links even go to his{' '}
              <a href="https://sethrobertson.github.io/GitBestPractices/" target="_blank">
                Git Best Practices
              </a>{' '}
              companion site and his{' '}
              <a href="https://sethrobertson.github.io/GitPostProduction/gpp.html" target="_blank">
                Post-Production Editing using Git
              </a>{' '}
              site.
            </Typography>
          </ListItem>
          <Container sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '48px' }}>
            <Link to="/disclaimer">Disclaimer</Link>
            <Link to="/copyright">Copyright</Link>
          </Container>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default Credits;
