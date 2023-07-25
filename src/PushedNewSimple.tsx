import { Suspense } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import InlineCode from './components/inline_code';
import Title from './components/title';
import CodeBlock from './components/code_block';

const PushedNewSimple = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>Reverting an old simple pushed commit</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              To create an positive commit to remove the effects of a simple (non-merge) commit, you
              must first identify the SHA of the commit you want to revert. You can do this using
              <InlineCode>gitk --date-order</InlineCode> or using{' '}
              <InlineCode>git log --graph --decorate --oneline</InlineCode> You are looking for the
              40 character SHA-1 hash ID (or the 7 character abbreviation). Yes, if you know the "^"
              or "~" shortcuts you may use those.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              <CodeBlock>git revert SHA</CodeBlock>
              Obviously replace "SHA" with the reference you want to revert. If you want to revert
              multiple SHA, you may specify a range or a list of SHA.
            </Typography>
          </ListItem>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default PushedNewSimple;
