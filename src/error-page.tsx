import { Paper } from '@mui/material';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Paper className="p-32">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Paper>
  );
};

export default ErrorPage;
