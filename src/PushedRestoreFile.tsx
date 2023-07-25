import { Suspense } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import InlineCode from './components/inline_code';
import Title from './components/title';
import CodeBlock from './components/code_block';

const PushedRestoreFile = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>Making a new commit to restore a file deleted earlier</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              The file may have been deleted or every change to that file in that commit (and all
              commits since then) should be destroyed. If so, you can simply checkout a version of
              the file which you know is good.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              You must first identify the SHA of the commit containing the good version of the file.
              You can do this using <InlineCode>gitk --date-order</InlineCode> or using{' '}
              <InlineCode>git log --graph --decorate --oneline</InlineCode> or perhaps{' '}
              <InlineCode>git log --oneline -- filename</InlineCode> You are looking for the 40
              character SHA-1 hash ID (or the 7 character abbreviation). Yes, if you know the "^" or
              "~" shortcuts you may use those.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              <CodeBlock>git checkout SHA -- path/to/filename</CodeBlock>
              Obviously replace "SHA" with the reference that is good. You can then add and commit
              as normal to fix the problem.
            </Typography>
          </ListItem>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default PushedRestoreFile;
