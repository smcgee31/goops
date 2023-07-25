import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Container, List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import InlineCode from './components/inline_code';
import Title from './components/title';
import CodeBlock from './components/code_block';

const ChangeSingleDeepMerge = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>Changing a single commit involving a merge</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              Note, that this only applies if you have a merge commit. If a fast-forward (ff) merge
              occurred you only have simple commits, so should use{' '}
              <Link to="/change_single_deep_simple">other instructions</Link>.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Oh dear. This is going to get a little complicated. It should all work out, though.
              You will need to use a{' '}
              <a href="https://en.wiktionary.org/wiki/nonce" target="_blank">
                nonce
              </a>{' '}
              branch as a placeholder. I will call the nonce branch "nonce" in the following
              example. However, you may use any branch name that is not currently in use. You can
              delete it immediately after you are done.
            </Typography>
          </ListItem>
          <Container>
            <ListItem>- Identify the SHA of the commit you wish to modify.</ListItem>
            <ListItem>
              <div className="px-4">
                <Typography>
                  You can do this using <InlineCode>gitk --date-order</InlineCode> or using{' '}
                  <InlineCode>git log --graph --decorate --oneline</InlineCode>. You are looking for
                  the 40 character SHA-1 hash ID (or the 7 character abbreviation). Yes, if you know
                  the "^" or "~" shortcuts you may use those.
                </Typography>
              </div>
            </ListItem>
            <ListItem>- Remember the name of the branch you are currently on</ListItem>
            <ListItem>
              <div className="px-4">
                <Typography>
                  The line with a star on it in the <InlineCode>git branch</InlineCode> output is
                  the branch you are currently on. I will use "$master" in this example, but
                  substitute your branch name for "$master" in the following commands.
                </Typography>
              </div>
            </ListItem>
            <ListItem>- Create and checkout a nonce branch pointing at that commit.</ListItem>
            <ListItem>
              <div className="px-4">
                <Typography>
                  <CodeBlock>git checkout -b nonce SHA</CodeBlock>
                  Obviously replace "SHA" with the reference you want to modify.
                </Typography>
              </div>
            </ListItem>
            <ListItem>- Modify the commit</ListItem>
            <ListItem>
              <div className="px-4">
                <Typography>
                  You need to get the index into the correct state you wish the commit to reflect.
                  If you are changing the commit message only, you need do nothing. If you are
                  changing the file contents, typically you would modify the working directory and
                  use <InlineCode>git add</InlineCode> as normal.
                </Typography>
                <Typography>
                  Note if you wish to restore a file to a known good state, you can use{' '}
                  <InlineCode>git checkout GOODSHA -- path/to/filename</InlineCode>.
                </Typography>
                <Typography>
                  Once the index is in the correct state, then you can run{' '}
                  <InlineCode>git commit --amend</InlineCode> to update the last commit. Yes, you
                  can use "-a" if you want to avoid the <InlineCode>git add</InlineCode> suggested
                  in the previous paragraph.
                </Typography>
                <Typography>
                  If the commit you are updating is a merge commit, ensure that the log message
                  reflects that.
                </Typography>
              </div>
            </ListItem>
            <ListItem>- Put the remaining commits after the new one you just created</ListItem>
            <ListItem>
              <div className="px-4">
                <Typography>
                  Remembering to substitute the correct branch name for $master
                  <CodeBlock>git rebase -r --onto $(git rev-parse nonce) HEAD^ $master</CodeBlock>
                </Typography>
              </div>
            </ListItem>
            <ListItem>- Validate that the topology is still good</ListItem>
            <ListItem>
              <div className="px-4">
                <Typography>
                  If some of the commits after the commit you changed are merge commits, please be
                  warned. It is possible that <InlineCode>git rebase -r</InlineCode> will be unable
                  to properly recreate them. Please inspect the resulting merge topology{' '}
                  <InlineCode>gitk --date-order HEAD ORIG_HEAD</InlineCode> to ensure that git did
                  want you wanted. If it did not, there is not really any automated recourse. You
                  can reset back to the commit before the SHA you want to get rid of, and then
                  cherry-pick the normal commits and manually re-merge the "bad" merges. Or you can
                  just suffer with the inappropriate topology (perhaps creating fake merges{' '}
                  <InlineCode>git merge --ours otherbranch</InlineCode> so that subsequent
                  development work on those branches will be properly merged in with the correct
                  merge-base).
                </Typography>
              </div>
            </ListItem>
            <ListItem>- Delete the nonce branch</ListItem>
            <ListItem>
              <div className="px-4">
                <Typography>
                  You don't need it. It was just there to communicate an SHA between two steps in
                  the above process. <InlineCode>git branch -d nonce</InlineCode>
                </Typography>
              </div>
            </ListItem>
          </Container>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default ChangeSingleDeepMerge;
