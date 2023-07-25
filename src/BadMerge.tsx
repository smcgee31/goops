import { Suspense } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import InlineCode from './components/inline_code';
import Title from './components/title';

const BadMerge = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>Recovering from a borkened merge</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              So, you were in the middle of a merge, have encountered one or more conflicts, and you
              have now decided that it was a big mistake and want to get out of the merge.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              The fastest way out of the merge is <InlineCode>git merge --abort</InlineCode>
            </Typography>
          </ListItem>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default BadMerge;
