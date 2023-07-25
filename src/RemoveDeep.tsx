import { Suspense } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import InlineCode from './components/inline_code';
import Title from './components/title';
import CodeBlock from './components/code_block';

const RemoveDeep = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>Removing an entire commit</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              I call this operation "cherry-pit" since it is the inverse of a "cherry-pick". You
              must first identify the SHA of the commit you wish to remove. You can do this using
              <InlineCode>gitk --date-order</InlineCode> or using{' '}
              <InlineCode>git log --graph --decorate --oneline</InlineCode>. You are looking for the
              40 character SHA-1 hash ID (or the 7 character abbreviation). Yes, if you know the "^"
              or "~" shortcuts you may use those.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              <CodeBlock>git rebase -r --onto SHA^ SHA</CodeBlock>
              Obviously replace "SHA" with the reference you want to get rid of. The "^" in that
              command is literal.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              However, please be warned. If some of the commits between SHA and the tip of your
              branch are merge commits, it is possible that <InlineCode>git rebase -r</InlineCode>{' '}
              will be unable to properly recreate them. Please inspect the resulting merge topology{' '}
              <InlineCode>gitk --date-order HEAD ORIG_HEAD</InlineCode> and contents to ensure that
              git did want you wanted. If it did not, there is not really any automated recourse.
              You can reset back to the commit before the SHA you want to get rid of, and then
              cherry-pick the normal commits and manually re-merge the "bad" merges. Or you can just
              suffer with the inappropriate topology (perhaps creating fake merges{' '}
              <InlineCode>git merge --ours otherbranch</InlineCode> so that subsequent development
              work on those branches will be properly merged in with the correct merge-base).
            </Typography>
          </ListItem>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default RemoveDeep;
