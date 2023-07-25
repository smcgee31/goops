import { Suspense } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import Title from './components/title';
import CodeBlock from './components/code_block';
import InlineCode from './components/inline_code';

const block1 = `# On branch master
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#       new file:   .gitignore
#
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#       modified:   A
#
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#
#       C
`;

const UncommittedSomethings = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>How to undo some uncommitted changes</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              So you have not yet committed and you want to undo some things, well git status will
              tell you exactly what you need to do. For example:
              <CodeBlock>{block1}</CodeBlock>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              However, the <InlineCode>git checkout</InlineCode> in file mode is a command that
              cannot be recovered from - the changes which are discarded most probably cannot be
              recovered. Perhaps you should run{' '}
              <InlineCode>git stash save -p "description"</InlineCode> instead, and select the
              changes you no longer want to be stashed instead of zapping them.
            </Typography>
          </ListItem>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default UncommittedSomethings;
