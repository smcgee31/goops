import { Suspense } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import InlineCode from './components/inline_code';
import Title from './components/title';
import CodeBlock from './components/code_block';

const ReplaceAllUnpushed = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>Replacing all branch history/contents</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              If instead of discarding all local commits, you can make your branch identical to some
              other branch, tag, ref, or SHA that exists on your system.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              The first thing you need to do is identify the SHA or ref of the good state of your
              branch. You can do this by looking at the output of{' '}
              <InlineCode>git branch -a; git tag</InlineCode>,{' '}
              <InlineCode>git log --all</InlineCode> or, my preference, you can look graphically at{' '}
              <InlineCode>gitk --all --date-order</InlineCode>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Once you have found the correct state of your branch, you can get to that state by
              running:
              <CodeBlock>git reset --hard REF</CodeBlock>
              Obviously replace "REF" with the reference or SHA you want to get back to.
            </Typography>
          </ListItem>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default ReplaceAllUnpushed;
