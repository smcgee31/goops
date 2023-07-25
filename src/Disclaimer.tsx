import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Container, List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import Title from './components/title';

const Disclaimer = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>Disclaimer</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              Information is not promised or guaranteed to be correct, current, or complete, and may
              be out of date and may contain technical inaccuracies or typographical errors. Any
              reliance on this material is at your own risk. No one assumes any responsibility (and
              everyone expressly disclaims responsibility) for updates to keep information current
              or to ensure the accuracy or completeness of any posted information. Accordingly, you
              should confirm the accuracy and completeness of all posted information before making
              any decision related to any and all matters described.
            </Typography>
          </ListItem>
          <Container sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '48px' }}>
            <Link to="/credits">Credits</Link>
            <Link to="/copyright">Copyright</Link>
          </Container>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default Disclaimer;
