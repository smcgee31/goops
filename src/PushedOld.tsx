import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import InlineCode from './components/inline_code';
import Title from './components/title';

const PushedOld = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>I am a bad person and must rewrite published history</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              Hopefully you read the previous reference and fully understand why this is bad and
              what you have to tell everyone else to do in order to recover from this condition.
              Assuming this, you simply need to go to the parts of this document which assume that
              you have not yet pushed and do them as normal. Then you need to do a "force push"{' '}
              <InlineCode>git push -f</InlineCode> to thrust your updated history upon everyone
              else. As you read in the reference, this may be denied by default by your upstream
              repository (see <InlineCode>git config receive.denyNonFastForwards</InlineCode>, but
              can be disabled (temporarily I suggest) if you have access to the server. You then
              will need to send mail to everyone who might have pulled the history telling them that
              history was rewritten and they need to <InlineCode>git pull --rebase</InlineCode> and
              do a bit of history rewriting of their own if they branched or tagged from the now
              outdated history.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Proceed with <Link to="/unpushed">fixing the old commit</Link>.
            </Typography>
          </ListItem>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default PushedOld;
