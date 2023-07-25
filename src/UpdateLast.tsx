import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import InlineCode from './components/inline_code';
import Title from './components/title';

const UpdateLast = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>Updating the last commit's contents or commit message</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              To update the last commit's contents, author, or commit message for a commit which you
              have not pushed or otherwise published, first you need to get the index into the
              correct state you wish the commit to reflect. If you are changing the commit message
              only, you need do nothing. If you are changing the file contents, typically you would
              modify the working directory and use <InlineCode>git add</InlineCode> as normal.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Note if you wish to restore a file to a known good state, you can use:{' '}
              <InlineCode>git checkout GOODSHA -- path/to/filename</InlineCode>.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Once the index is in the correct state, then you can run{' '}
              <InlineCode>git commit --amend</InlineCode> to update the last commit. Yes, you can
              use "-a" if you want to avoid the <InlineCode>git add</InlineCode> suggested in the
              previous paragraph. You can also use --author to change the author information.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              If you want to do something more sophisticated that what "--amend" allows, please
              investigate <Link to="/rework_last">reworking</Link> the last commit.
            </Typography>
          </ListItem>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default UpdateLast;
