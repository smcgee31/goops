import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Paper, Typography } from '@mui/material';
import './App.css';

const App = () => {
  // this might be where you load data from your gist
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Box>
        <Container maxWidth="md">
          <Paper elevation={3} className="p-3 max-w-screen-sm">
            <Typography sx={{ fontSize: 'h1.fontSize' }} className="pb-4">
              Goops!
            </Typography>
            <Typography mt={-3} mb={8}>
              (git... oops!)
            </Typography>
            <Typography className="text-justify pb-4">
              Welcome! I'm glad you're here, but sorry for the reason. Let's embark on an adventure
              to fix what you didn't mean to do. Before you get started you should really consider
              making sure you have a{' '}
              <a href="https://sethrobertson.github.io/GitBestPractices/#backups" target="_blank">
                backup
              </a>{' '}
              of your work. If later you find yourself regretting not doing this we promise to only
              laugh at you a little bit. 😜
            </Typography>
            <Typography className="pb-4">
              The path forward will help me to know how you got here, for, in order to know how to
              help you get where you are going, I need to know where you have been.
            </Typography>
            <Link to="/find_or_fix">PATH IMAGE HERE</Link>
            <Typography>(click the path)</Typography>
          </Paper>
        </Container>
      </Box>
    </Suspense>
  );
};

export default App;
