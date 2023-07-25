import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import InlineCode from './components/inline_code';
import Title from './components/title';
import CodeBlock from './components/code_block';

const block1 = `git branch nonce $last
git rebase -r --onto $destination $first^ nonce
`;
const block2 = `git checkout $destination
git reset --hard nonce
git branch -d nonce
`;

const MoveCommit = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>Moving a commit from one branch to another</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              So, you have a commit which is in the wrong place and you want to move it from one
              branch to another. In order to do this, you will need to know the SHA of the first and
              last commit (in a continuous series of commits) you want to move (those values are the
              same if you are moving only one commit), the name of the branch you are moving the
              commit from, and the name of the branch you are moving the commit to. In the example
              below, I will name these four values $first, $last, $source, and $destination
              (respectively). Additionally, you will need to use a{' '}
              <a href="https://en.wiktionary.org/wiki/nonce" target="_blank">
                nonce
              </a>{' '}
              branch as a placeholder. I will call the nonce branch "nonce" in the following
              example. However, you may use any branch name that is not currently in use. You can
              delete it immediately after you are done.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              <CodeBlock>{block1}</CodeBlock>
              Remember that when you substitute $first in the command above, leave the "^" alone, it
              is literal.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Use <InlineCode>gitk --all --date-order</InlineCode> to check to make sure the move
              looks correct (pretending that nonce is the destination branch). Please check very
              carefully if you were trying to move a merge, it may have been recreated improperly.
              If you don't like the result, you may delete the nonce branch (
              <InlineCode>git branch -D nonce</InlineCode>) and try again.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              However, if everything looks good, we can move the actual destination branch pointer
              to where nonce is:
              <CodeBlock>{block2}</CodeBlock>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              If you double-checked with <InlineCode>gitk --all --date-order</InlineCode>, you would
              see that the destination branch looks correct. However, the commits are still on the
              source branch as well. We can get rid of those now:
              <CodeBlock>git rebase -r --onto $first^ $last $source</CodeBlock>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Using <InlineCode>gitk --all --date-order</InlineCode> one last time, you should now
              see that the commits on the source branch have gone away. You have successfully moved
              the commits. Please check very carefully if merges occurred after the commits which
              were deleted. They may have been recreated incorrectly. If so you can either{' '}
              <Link to="/undo_tip">undo the delete</Link> or try to delete the bad merge and try to
              recreate it manually, or create a fake (--ours) merge from the same SHA so that git is
              aware that the merge occurred.
            </Typography>
          </ListItem>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default MoveCommit;
