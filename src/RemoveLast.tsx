import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import InlineCode from './components/inline_code';
import Title from './components/title';

const RemoveLast = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>Removing the last commit</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              To remove the last commit from git, you can simply run{' '}
              <InlineCode>git reset --hard HEAD^</InlineCode> If you are removing multiple commits
              from the top, you can run <InlineCode>git reset --hard HEAD~2</InlineCode> to remove
              the last two commits. You can increase the number to remove even more commits.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              If you want to "uncommit" the commits, but keep the changes around for{' '}
              <Link to="/rework_last">reworking</Link>, remove the "--hard":{' '}
              <InlineCode>git reset HEAD^</InlineCode> which will evict the commits from the branch
              and from the index, but leave the working tree around.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              If you want to save the commits on a new branch name, then run{' '}
              <InlineCode>git branch newbranchname</InlineCode> before doing the{' '}
              <InlineCode>git reset</InlineCode>.
            </Typography>
          </ListItem>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default RemoveLast;
