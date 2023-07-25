import { Suspense } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import InlineCode from './components/inline_code';
import Title from './components/title';

const ReworkLast = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>Reworking the last commit</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              <strong>WARNING:</strong> These techniques should only be used for non-merge commits.
              If you have a merge commit, you are better off deleting the merge and recreating it.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              If you want to perform significant work on the last commit, you can simply{' '}
              <InlineCode>git reset HEAD^</InlineCode>. This will undo the commit (peel it off) and
              restore the index to the state it was in before that commit, leaving the working
              directory with the changes uncommitted, and you can fix whatever you need to fix and
              try again.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              You can do this with multiple (non-merge) commits in a row (using "HEAD^^" or similar
              techniques), but then of course you lose the separation between the commits and are
              left with an undifferentiated working directory. If you are trying to squash all of
              the commits together, or rework which bits are in which commits, this may be what you
              want.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              If you want to reorder commits, split them, merge them together, or otherwise perfect
              the commits, you should explore{' '}
              <a href="https://sethrobertson.github.io/GitPostProduction" target="_blank">
                Post Production Editing Using Git
              </a>
              .
            </Typography>
          </ListItem>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default ReworkLast;
