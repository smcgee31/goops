import { Suspense } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import Title from './components/title';
import InlineCode from './components/inline_code';
import CodeBlock from './components/code_block';

const block1 = `git stash
git checkout otherbranch
git stash apply
"resolve conflicts"
git commit -am "My descriptive message"
git stash drop
`;
const block2 = `git checkout -b newbranch
git commit -am "My descriptive message"
`;

const UncommittedCommit = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>How to save uncommitted changes</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              There are five ways you can save your uncommitted change. I also suggest you read{' '}
              <a href="https://git-scm.com/book/" target="_blank">
                Pro Git
              </a>{' '}
              as these are pretty basic git operations.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Commit them on the local branch.
              <CodeBlock>git commit -am "My descriptive message"</CodeBlock>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Commit them on another branch, no checkout conflicts.
              <CodeBlock>
                git checkout otherbranch && git commit -am "My descriptive message"
              </CodeBlock>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Commit them on another branch, conflicts.
              <CodeBlock>{block1}</CodeBlock>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Commit them on a new branch.
              <CodeBlock>{block2}</CodeBlock>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Stash them for a rainy day.
              <CodeBlock>git stash save "my descriptive name"</CodeBlock>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Using <InlineCode>git add -p</InlineCode> to add/commit only some changes to make
              multiple commits is left as an exercise for the reader.
            </Typography>
          </ListItem>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default UncommittedCommit;
