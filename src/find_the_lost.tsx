import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Paper, Typography } from '@mui/material';
import { gray } from '@mui/material/colors';

const FindTheLost = () => {
  const gray100 = gray[100];
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Box>
        <Container maxWidth="md">
          <Paper elevation={3} className="p-3 max-w-screen-sm">
            <Typography sx={{ fontSize: 'h5.fontSize' }} className="pb-4">
              I have lost some commits I know I made
            </Typography>
            <Typography className="text-justify pb-4">
              First make sure that it was not on a different branch. Try{' '}
              {/* <div className="bg-gray-100">
                <pre>git branch --all</pre>
                <pre>git lot -Sfoo --all</pre>
              </div> */}
              where "foo" is replaced with something unique in the commits you made
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Suspense>
  );
};

export default FindTheLost;
