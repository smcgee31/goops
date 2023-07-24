import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Paper, Typography } from '@mui/material';
import { CardData, CardName as Props } from './../types';
import data from './../data.json';

const ChoiceCard = ({ cardName }: Props) => {
  const { title, description, links }: CardData = data[cardName];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Box>
        <Container maxWidth="md">
          <Paper elevation={3} className="p-3 max-w-screen-sm">
            <Typography sx={{ fontSize: 'h3.fontSize' }} className="pb-4">
              {title}
            </Typography>
            <Typography className="text-justify pb-4">{description}</Typography>
            {links.map((link) => (
              <>
                <Link to={`${link.path}`}>{link.text}</Link>
                <Typography>(click the path image)</Typography>
              </>
            ))}
          </Paper>
        </Container>
      </Box>
    </Suspense>
  );
};

export default ChoiceCard;
