import { Suspense } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import InlineCode from './components/inline_code';
import Title from './components/title';

const code = 'git reset --hard @{u}';

const DiscardAllUnpushed = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>Discarding all local commits on this branch</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              In order to discard all local commits on this branch, to make the local branch
              identical to the "upstream" of this branch, simply run <InlineCode>{code}</InlineCode>
            </Typography>
          </ListItem>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default DiscardAllUnpushed;
