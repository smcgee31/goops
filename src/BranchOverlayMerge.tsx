import { Suspense } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import Title from './components/title';
import CodeBlock from './components/code_block';

const block1 = `# Portable method to overwrite one branch with another in two commits
git clean -dfx
git checkout $destination
git reset --hard $source
git reset --soft ORIG_HEAD
git add -fA .
git commit -m "Rewrite $destination with $source"
git merge -s ours $source
`;

const block2 = `# Hacky method to overwrite one branch with another in one commit
git clean -dfx
git checkout $destination
git reset --hard $source
git reset --soft ORIG_HEAD
git add -fA .
git rev-parse $source > .git/MERGE_HEAD
git commit -m "Rewrite $destination with $source"
`;

const BranchOverlayMerge = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>Rewriting an old branch with a new branch with a new commit</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              If the state of a branch is contaminated beyond repair and you have pushed that branch
              or otherwise do not want to rewrite the existing history, then you can make a new
              commit which overwrites the original branch with the new one and pretends this was due
              to a merge. The command is a bit complicated, and will get rid of all ignored or
              untracked files in your working directory, so please be sure you have properly backed
              up everything.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              In the following example please replace $destination with the name of the branch whose
              contents you want to overwrite. $source should be replaced with the name of the branch
              whose contents are good.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              You actually are being provided with two methods. The first set is more portable but
              generates two commits. The second knows about the current internal files git uses to
              do the necessary work in one commit. Only one command is different and a second
              command runs at a different time.
              <CodeBlock>{block1}</CodeBlock>
              or
              <CodeBlock>{block2}</CodeBlock>
            </Typography>
          </ListItem>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default BranchOverlayMerge;
