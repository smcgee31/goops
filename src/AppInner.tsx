import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import './App.css';
import Canvas from './components/canvas';

const AppInner = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Typography sx={{ fontSize: 'h1.fontSize' }} className="pb-4">
          Goops!
        </Typography>
        <Typography mt={-3} mb={4}>
          (git... oops!)
        </Typography>
        <Typography className="text-justify pb-8">
          Let's embark on an adventure to fix what you didn't mean to do. Before you get started you
          should really consider making sure you have a{' '}
          <a href="https://sethrobertson.github.io/GitBestPractices/#backups" target="_blank">
            backup
          </a>{' '}
          of your work. If later you find yourself regretting not doing this we promise to only
          laugh at you a little bit. 😜
        </Typography>
        <Typography className="pb-4" fontSize={24}>
          Ready?
        </Typography>
        <Typography fontSize={24}>
          <Link to="/start">Let's Go!</Link>
        </Typography>
        <Container sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '64px' }}>
          <Link to="/credits">Credits</Link>
          <Link to="/copyright">Copyright</Link>
          <Link to="/disclaimer">Disclaimer</Link>
        </Container>
      </Canvas>
    </Suspense>
  );
};

export default AppInner;
