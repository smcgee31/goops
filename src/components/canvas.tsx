import { Box, Container, Paper } from '@mui/material';

const Canvas = (props: { children: JSX.Element[] | JSX.Element }) => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Paper elevation={3} className="p-3 max-w-screen-md">
          {props.children}
        </Paper>
      </Container>
    </Box>
  );
};

export default Canvas;
