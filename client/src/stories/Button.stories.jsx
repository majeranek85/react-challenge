import React from 'react';

import { Button } from '../ui';
import { Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
//import { theme } from 'theme';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Zadanie 1/Button',
  component: Button,
  description: 'ahaha',
  //More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: {
        type: 'radio',
      },
      options: ['contained', 'outlined'],
    },
    color: {
      control: {
        type: 'radio',
      },
      options: ['primary', 'error', 'success', 'warning'],
    },
    disabled: {
      control: {
        default: false,
        type: 'boolean',
      },
    },
    startIcon: {
      control:{
        type: 'node',
      },
    },
    endIcon: {
      control:{
        type: 'node',
      },
    }
  },
};

//TEMPLATE
const Template = ({ label, ...args }) => <Button {...args}>{label}</Button>;
const All = () => (
  <>
    <Grid container>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Contained</Typography>
      </Grid>
    </Grid>

    <Grid sx={{mb: 2}}>
      <Button sx={{mr: 2}}  variant={'contained'} color={'primary'}>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'primary'} startIcon={<AddIcon/>}>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'primary'} endIcon={<ArrowForwardIosIcon/>}>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'primary'} >{<ArrowForwardIosIcon/>}</Button>
    </Grid>

    <Grid sx={{mb: 2}}>
      <Button sx={{mr: 2}}  variant={'contained'} color={'primary'} disabled>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'primary'} startIcon={<AddIcon/>} disabled>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'primary'} endIcon={<ArrowForwardIosIcon/>} disabled>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'primary'} disabled>{<ArrowForwardIosIcon/>}</Button>
    </Grid>

    <Grid sx={{mb: 2}}>
      <Button sx={{mr: 2}} variant={'contained'} color={'error'}>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'error'} startIcon={<AddIcon/>}>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'error'} endIcon={<ArrowForwardIosIcon/>}>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'error'} >{<ArrowForwardIosIcon/>}</Button>
    </Grid>

    <Grid sx={{mb: 2}}>
      <Button sx={{mr: 2}} variant={'contained'} color={'error'} disabled>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'error'} startIcon={<AddIcon/>} disabled>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'error'} endIcon={<ArrowForwardIosIcon/>}disabled>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'error'} disabled>{<ArrowForwardIosIcon/>}</Button>
    </Grid>

    <Grid sx={{mb: 2}}>
      <Button sx={{mr: 2}} variant={'contained'} color={'success'}>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'success'} startIcon={<AddIcon/>}>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'success'} endIcon={<ArrowForwardIosIcon/>}>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'success'} >{<ArrowForwardIosIcon/>}</Button>
    </Grid>

    <Grid sx={{mb: 2}}>
      <Button sx={{mr: 2}} variant={'contained'} color={'success'} disabled>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'success'} startIcon={<AddIcon/>} disabled>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'success'} endIcon={<ArrowForwardIosIcon/>} disabled>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'success'}  disabled>{<ArrowForwardIosIcon/>}</Button>
    </Grid>

    <Grid sx={{mb: 2}}>
      <Button sx={{mr: 2}} variant={'contained'} color={'warning'} >
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'warning'} startIcon={<AddIcon/>}>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'warning'} endIcon={<ArrowForwardIosIcon/>}>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'warning'} >{<ArrowForwardIosIcon/>}</Button>
    </Grid>

    <Grid sx={{mb: 2}}>
      <Button sx={{mr: 2}} variant={'contained'} color={'warning'} disabled>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'warning'} startIcon={<AddIcon/>} disabled>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'warning'} endIcon={<ArrowForwardIosIcon/>} disabled>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'warning'} disabled >{<ArrowForwardIosIcon/>}</Button>
    </Grid>

    <Grid container sx={{ mt: 5 }}>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Outlined</Typography>
      </Grid>
    </Grid>
    <Grid sx={{mb: 2}}>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'primary'}>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'primary'} startIcon={<AddIcon/>}>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'primary'} endIcon={<ArrowForwardIosIcon/>}>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'primary'} >{<ArrowForwardIosIcon/>}</Button>
    </Grid>

    <Grid sx={{mb: 2}}>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'primary'} disabled>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'primary'} startIcon={<AddIcon/>} disabled>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'primary'} endIcon={<ArrowForwardIosIcon/>} disabled>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'primary'} disabled>{<ArrowForwardIosIcon/>}</Button>
    </Grid>

    <Grid sx={{mb: 2}}>
      <Button sx={{mr: 2}} variant={'outlined'} color={'error'}>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'error'} startIcon={<AddIcon/>}>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'error'} endIcon={<ArrowForwardIosIcon/>}>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'error'} >{<ArrowForwardIosIcon/>}</Button>
    </Grid>

    <Grid sx={{mb: 2}}>
    <Button sx={{mr: 2}} variant={'outlined'} color={'error'} disabled>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'error'} startIcon={<AddIcon/>} disabled>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'error'} endIcon={<ArrowForwardIosIcon/>} disabled>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'error'} disabled >{<ArrowForwardIosIcon/>}</Button>
    </Grid>

    <Grid sx={{mb: 2}}>
      <Button sx={{mr: 2}} variant={'outlined'} color={'success'}>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'success'} startIcon={<AddIcon/>}>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'success'} endIcon={<ArrowForwardIosIcon/>}>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'success'} >{<ArrowForwardIosIcon/>}</Button>
    </Grid>

    <Grid sx={{mb: 2}}>
    <Button sx={{mr: 2}} variant={'outlined'} color={'warning'} disabled >
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'warning'} startIcon={<AddIcon/>} disabled>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'warning'} endIcon={<ArrowForwardIosIcon/>} disabled>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'warning'} disabled >{<ArrowForwardIosIcon/>}</Button>
    </Grid>

    <Grid sx={{mb: 2}}>
      <Button sx={{mr: 2}} variant={'outlined'} color={'warning'} >
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'warning'} startIcon={<AddIcon/>}>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'warning'} endIcon={<ArrowForwardIosIcon/>}>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'warning'} >{<ArrowForwardIosIcon/>}</Button>
    </Grid>

    <Grid sx={{mb: 2}}>
    <Button sx={{mr: 2}} variant={'outlined'} color={'warning'} disabled >
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'warning'} startIcon={<AddIcon/>} disabled>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'warning'} endIcon={<ArrowForwardIosIcon/>} disabled>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'warning'} disabled >{<ArrowForwardIosIcon/>}</Button>
    </Grid>
  </>
);

// export const Playground = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Playground.args = {
//   label: 'Button',
// };

export const AllStories = All.bind({});

export const BtnBase = Template.bind({});
BtnBase.args = {
  label: 'Button',
}

export const BtnPlus = Template.bind({});
BtnPlus.args = {
  ...BtnBase.args,
  startIcon: <AddIcon/>,
}

export const BtnArrow = Template.bind({});
BtnArrow.args = {
  ...BtnBase.args,
  endIcon: <ArrowForwardIosIcon/>
}

export const BtnIcon = Template.bind({});
BtnIcon.args = {
  ...BtnBase.args,
  label: <ArrowForwardIosIcon/>
}
