import { Suspense } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import Title from './components/title';
import CodeBlock from './components/code_block';
import InlineCode from './components/inline_code';

const ChangeSingleDeepSimple = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>Changing a single commit involving only simple commits</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              You must first identify the SHA of the commit you wish to remove. You can do this
              using <InlineCode>gitk --date-order</InlineCode> or using{' '}
              <InlineCode>git log --graph --decorate --oneline</InlineCode>. You are looking for the
              40 character SHA-1 hash ID (or the 7 character abbreviation). Yes, if you know the "^"
              or "~" shortcuts you may use those.
              <CodeBlock>git rebase -i SHA^</CodeBlock>
              Obviously replace "SHA" with the reference you want to get rid of. The "^" in that
              command is literal.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              You will be dumped in an editor with a bunch of lines starting with pick. The oldest
              commit, the one you are probably interested in changing, is first. You will want to
              change the "pick" to "reword" or "edit", or perhaps even "squash" depending on what
              your goal is. Please read the{' '}
              <a href="https://gitirc.eu/git-rebase.html" target="_blank">
                manual page
              </a>{' '}
              for more information. A document on{' '}
              <a href="https://sethrobertson.github.io/GitPostProduction/" target="_blank">
                Post-Production Editing using Git
              </a>{' '}
              goes through much of the major uses of git rebase is some detail. The use case is a
              little different, but the fundamental techniques are not.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              When using "edit", to change contents or author, when you are dumped into the shell to
              make your change, well make your change, <InlineCode>git add</InlineCode> as normal,
              and then run <InlineCode>git commit --amend</InlineCode> (including changing the
              author information with --author). When you are satisfied, you should run{' '}
              <InlineCode>git rebase --continue</InlineCode>
            </Typography>
          </ListItem>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default ChangeSingleDeepSimple;
