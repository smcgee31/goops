import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, Typography } from '@mui/material';
import parse from 'html-react-parser';
import { CardData, CardName as Props } from './../types';
import data from './../../data.json';
import Canvas from './canvas';
import Title from './title';

const ChoiceCard = ({ cardName }: Props) => {
  const { title, description, links }: CardData = data[cardName as keyof typeof data];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>{title}</Title>
        <Typography className="text-justify">{parse(description)}</Typography>
        {links.map((link) => (
          <>
            <List>
              <ListItem>
                <Link to={`${link.path}`}>{link.text}</Link>
              </ListItem>
            </List>
          </>
        ))}
      </Canvas>
    </Suspense>
  );
};

export default ChoiceCard;
