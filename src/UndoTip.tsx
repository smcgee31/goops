import { Suspense } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import InlineCode from './components/inline_code';
import Title from './components/title';
import CodeBlock from './components/code_block';

const UndoTip = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>Undoing the last few git operations affecting HEAD/my branch's tip</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              Practically every git operation which affects the repository is recorded in the git
              reflog. You may then use the reflog to look at the state of the branches at previous
              times or even go back to the state of the local branch at the time.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              While this happens for every git command affecting HEAD, it is usually most
              interesting when attempting to recover from a bad rebase or reset or an --amend'ed
              commit. There are better ways (listed by the rest of this document) from recovering
              from the more mundane reflog updates.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              The first thing you need to do is identify the SHA of the good state of your branch.
              You can do this by looking at the output of <InlineCode>git log -g</InlineCode> or, my
              preference, you can look graphically at{' '}
              <InlineCode>gitk --all --date-order $(git log -g --pretty=%H)</InlineCode>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Once you have found the correct state of your branch, you can get back to that state
              by running
              <CodeBlock>git reset --hard SHA</CodeBlock>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              You could also link that old state to a new branch name using
              <CodeBlock>git checkout -b newbranch SHA</CodeBlock>
              Obviously replace "SHA" in both commands with the reference you want to get back to.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Note that any other commits you have performed since you did that "bad" operation will
              then be lost. You could <InlineCode>git cherry-pick</InlineCode> or{' '}
              <InlineCode>git rebase -r --onto</InlineCode> those other commits over.
            </Typography>
          </ListItem>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default UndoTip;
