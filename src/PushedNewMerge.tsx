import { Suspense } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import InlineCode from './components/inline_code';
import Title from './components/title';
import CodeBlock from './components/code_block';

const block = `git checkout $destination
git revert $sha
# save the SHA-1 of the revert commit to un-revert it later
revert='git rev-parse HEAD'
git checkout $source
git merge $destination
git revert $revert
`;

const PushedNewMerge = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>Reverting a merge commit</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              Note, that this only applies if you have a merge commit. If a fast-forward (ff) merge
              occurred you only have simple commits, so should use another method.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Oh dear. This is going to get complicated.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              To create an positive commit to remove the effects of a merge commit, you must first
              identify the SHA of the commit you want to revert. You can do this using{' '}
              <InlineCode>gitk --date-order</InlineCode> or using{' '}
              <InlineCode>git log --graph --decorate --oneline</InlineCode> You are looking for the
              40 character SHA-1 hash ID (or the 7 character abbreviation). Yes, if you know the "^"
              or "~" shortcuts you may use those.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Undoing the file modifications caused by the merge is about as simple as you might
              hope. <InlineCode>git revert -m 1 SHA</InlineCode>. (Obviously replace "SHA" with the
              reference you want to revert; <InlineCode>-m 1</InlineCode> will revert changes from
              all but the first parent, which is almost always what you want.) Unfortunately, this
              is just the tip of the iceberg. The problem is, what happens months later, long after
              you have exiled this problem from your memory, when you try again to merge these
              branches (or any other branches they have been merged into)? Because git has it
              tracked in history that a merge occurred, it is not going to attempt to remerge what
              it has already merged, and even worse, if you merge from the branch where you did the
              revert you will undo the changes on the branch where they were made. (Imagine you
              revert a premature merge of a long-lived topic branch into master and later merge
              master into the topic branch to get other changes for testing.)
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              One option is actually to do this reverse merge immediately, annihilating any changes
              before the bad merge, and then to "revert the revert" to restore them. This leaves the
              changes removed from the branch you mistakenly merged to, but present on their
              original branch, and allows merges in either direction without loss. This is the
              simplest option, and in many cases, can be the best.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              A disadvantage of this approach is that <InlineCode>git blame</InlineCode> output is
              not as useful (all the changes will be attributed to the revert of the revert) and{' '}
              <InlineCode>git bisect</InlineCode> is similarly impaired. Another disadvantage is
              that you must merge all current changes in the target of the bad merge back into the
              source; if your development style is to keep branches clean, this may be undesirable,
              and if you rebase your branches (e.g. with <InlineCode>git pull --rebase</InlineCode>
              ), it could cause complications unless you are careful to use{' '}
              <InlineCode>git rebase -r</InlineCode> to rebase merges (formerly known as preserving
              merges).
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              In the following example please replace $destination with the name of the branch that
              was the destination of the bad merge, $source with the name of the branch that was the
              source of the bad merge, and $sha with the SHA-1 hash ID of the bad merge itself.
              <CodeBlock>{block}</CodeBlock>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Another option is to abandon the branch you merged from, recreate it from the previous
              merge-base with the commits since then rebased or cherry-picked over, and use the
              recreated branch from now on. Then the new branch is unrelated and will merge
              properly. Of course, if you have pushed the donor branch you cannot use the same name
              (that would be rewriting public history and is bad) so everyone needs to remember to
              use the new branch. Hopefully you have something like{' '}
              <a href="https://github.com/sitaramc/gitolite" target="_blank">
                gitolite
              </a>{' '}
              where you can close the old branch name.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              This approach has the advantage that the recreated donor branch will have cleaner
              history, but especially if there have been many commits (and especially merges) to the
              branch, it can be a lot of work. At this time, I will not walk you through the process
              of recreating the donor branch. Given sufficient demand I can try to add that.
              However, if you look at{' '}
              <a
                href="https://www.kernel.org/pub/software/scm/git/docs/howto/revert-a-faulty-merge.txt"
                target="_blank"
              >
                howto/revert-a-faulty-merge.txt
              </a>{' '}
              (also shipped as part of the git distribution) it will provide more words than you can
              shake a stick at.
            </Typography>
          </ListItem>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default PushedNewMerge;
