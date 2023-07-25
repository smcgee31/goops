import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Container, List, ListItem, Typography } from '@mui/material';
import Canvas from './components/canvas';
import Title from './components/title';
import InlineCode from './components/inline_code';

const Copyright = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>Copyright</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">
              I personally claim no copyright rights. You can find Seth Robertson's copyright
              information on his page where this material is from. The original licenses are passed
              on here, those being either <br />
              <br />
              <InlineCode>
                Creative Commons Attribution-ShareAlike 3.0 Generic (CC BY-SA 3.0)
                https://creativecommons.org/licenses/by-sa/3.0/
              </InlineCode>{' '}
              <br />
              or <br />
              <InlineCode>
                GNU Free Documentation v1.3 with no Invariant, Front, or Back Cover texts.
                https://www.gnu.org/licenses/fdl.html
              </InlineCode>
              . <br />
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className="text-justify">
              Neither this project nor the original material is affiliated with Chooseco, LLC's
              "Choose Your Own Adventure"ⓡ.
            </Typography>
          </ListItem>
          <Container sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '48px' }}>
            <Link to="/credits">Credits</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </Container>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default Copyright;
