import { Suspense, useContext } from 'react';
import { Link as _Link } from 'react-router-dom';
import { List, ListItem, Typography } from '@mui/material';
import parse from 'html-react-parser';
import { CardData, CardName as Props } from './../types';
import DataContext from './../data_context';
import Canvas from './canvas';
import Title from './title';

const ChoiceCard = ({ cardName }: Props) => {
  const data = useContext(DataContext);
  const { title, description, links }: CardData = data
    ? data[cardName as keyof typeof data]
    : { title: '', description: '', links: [] };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas>
        <Title>{title}</Title>
        <List>
          <ListItem>
            <Typography className="text-justify">{parse(description)}</Typography>
          </ListItem>
          <>
            {links.map((link) => (
              <div key={link.path}>
                <List>
                  <ListItem>
                    <_Link to={`${link.path}`}>{link.text}</_Link>
                  </ListItem>
                </List>
              </div>
            ))}
          </>
        </List>
      </Canvas>
    </Suspense>
  );
};

export default ChoiceCard;
