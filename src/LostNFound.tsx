import { Suspense } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import InlineCode from './components/inline_code';
import CodeBlock from './components/code_block';
import Title from './components/title';

const visualize: string = "gitk --all --date-order $(git stash list | awk -F: '{print $1};'";
const gitLostAndFound: string = `gitk --all --date-order $(git fsck | grep "dangling commit" | awk '{print $3;}')`;
const danglingBlobs: string = `git fsck | grep "dangling blob" | while read x x s; do
  git show $s | less;
done
`;

const LostNFound = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>I have lost some commits I know I made</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              First make sure that it was not on a different branch. Try running{' '}
              <InlineCode>git log -S foo --all</InlineCode> where "foo" is replaced with something
              unique in the commits you made.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              You can also search with <InlineCode>gitk --all --date-order</InlineCode> to see if
              anything looks likely.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Check your stashes with <InlineCode>gitk --all --date-order</InlineCode> to see if you
              might have stashed instead of committing.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              You can also visualize what the stashes might be associated with via:
              <CodeBlock>{visualize}</CodeBlock>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Next, you should probably look in other repositories you have lying around including
              ones on other hosts and in testing environments, and in your backups.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Once you are fully convinced that it is well and truly lost, you can start looking
              elsewhere in git. Specifically, you should first look at the reflog which contains the
              history of what happened to the tip of your branches for the past two weeks or so. You
              can of course say git log -g or git reflog to view it, but it may be best visualized
              with:
              <CodeBlock>gitk --all --date-order $(git reflog --pretty=%H)</CodeBlock>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Next you can look in git's lost and found. Dangling commits get generated for many
              good reasons including resets and rebases. Still those activities might have mislaid
              the commits you were interested in. These might be best visualized with:
              <CodeBlock>{gitLostAndFound}</CodeBlock>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              The last place you can look is in dangling blobs. These are files which have been{' '}
              <InlineCode>git add</InlineCode>ed but not attached to a commit for some (usually
              innocuous) reason. To look at the files, one at a time, run:
              <CodeBlock>{danglingBlobs}</CodeBlock>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Once you find the changes you are interested in, there are several ways you can
              proceed. You can <InlineCode>git reset --hard SHA</InlineCode> your current branch to
              the history and current state of that SHA (probably not recommended for stashes), you
              can <InlineCode>git branch newbranch SHA</InlineCode> to link the old history to a new
              branch name (also not recommended for stashes), you can{' '}
              <InlineCode>git stash apply SHA</InlineCode> (for the non-index commit in a
              git-stash), you can <InlineCode>git stash merge SHA</InlineCode> or{' '}
              <InlineCode>git cherry-pick SHA</InlineCode> (for either part of a stash or
              non-stashes), etc.
            </Typography>
          </ListItem>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default LostNFound;
