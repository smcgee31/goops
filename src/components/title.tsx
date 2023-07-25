import { Typography } from '@mui/material';

const Title = (props: { children: string }) => {
  return (
    <Typography sx={{ fontSize: 'h5.fontSize' }} className="pb-4">
      {props.children}
    </Typography>
  );
};

export default Title;
