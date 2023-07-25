import { Suspense } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import Title from './components/title';

const PushedFixit = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>Making a new commit to fix an old commit</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              If the problem in the old commit is just something was done incorrectly, go ahead and
              make a normal commit to fix the problem. Feel free to reference the old commit SHA in
              the commit message, and if you are into the blame-based development methodology, make
              fun of the person who made the mistake (or someone who recently left if you made the
              mistake).
            </Typography>
          </ListItem>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default PushedFixit;
