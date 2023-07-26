import { Container, Paper } from '@mui/material';

const Canvas = (props: { children: JSX.Element[] | JSX.Element }) => {
  return (
    <Container maxWidth="lg">
      <Paper elevation={3} className="p-3 max-w-screen-md">
        {props.children}
      </Paper>
    </Container>
  );
};

export default Canvas;
