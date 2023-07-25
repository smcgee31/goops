import { Suspense } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import Title from './components/title';
import InlineCode from './components/inline_code';

const UncommittedEverything = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>How to undo all uncommitted changes</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              So you have not yet committed and you want to undo everything. Well,{' '}
              <a href="https://sethrobertson.github.io/GitBestPractices/" target="_blank">
                best practice
              </a>{' '}
              is for you to stash the changes in case you were mistaken and later decide that you
              really wanted them after all.{' '}
              <InlineCode>git stash save "description of changes"</InlineCode>. You can revisit
              those stashes later <InlineCode>git stash list</InlineCode> and decide whether to{' '}
              <InlineCode>git stash drop</InlineCode> them after some time has past. Please note
              that untracked and ignored files are not stashed by default. See "--include-untracked"
              and "--all" for stash options to handle those two cases.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              However, perhaps you are confident (or arrogant) enough to know for sure that you will
              never ever want the uncommitted changes. If so, you can run{' '}
              <InlineCode>git reset --hard</InlineCode>, however please be quite aware that this is
              almost certainly a completely unrecoverable operation. Any changes which are removed
              here cannot be restored later. This will not delete untracked or ignored files. Those
              can be deleted with <InlineCode>git clean -nd</InlineCode>{' '}
              <InlineCode>git clean -ndX</InlineCode> respectively, or{' '}
              <InlineCode>git clean -ndx</InlineCode> for both at once. Well, actually those command
              do not delete the files. They show what files will be deleted. Replace the "n" in
              "-nd…" with "f" to actually delete the files. Best practice is to ensure you are not
              deleting what you should not by looking at the moribund filenames first.
            </Typography>
          </ListItem>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default UncommittedEverything;
