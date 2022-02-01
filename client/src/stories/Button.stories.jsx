import React from 'react';

import { Button } from '../ui';
import { Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
    label: {
      control: {
        type: '' | 'node'
      },
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
    disableRipple: {
      control: {
        default: true,
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

const btnClickHandler = (e) => {
  e.preventDefault();
  console.log(e.target, 'button clicked')
}

const All = () => (
  <>
    <Grid container>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Contained</Typography>
      </Grid>
    </Grid>

    <Grid sx={{mb: 2}}>
      <Button sx={{mr: 2}} onClick={btnClickHandler} variant={'contained'} color={'primary'} disableRipple>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'primary'} startIcon={<AddIcon/>} disableRipple>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'primary'} endIcon={<ArrowForwardIosIcon/>} disableRipple>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'primary'} disableRipple>{<ArrowForwardIosIcon/>}</Button>
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
      <Button sx={{mr: 2}} variant={'contained'} color={'error'} disableRipple>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'error'} startIcon={<AddIcon/>} disableRipple>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'error'} endIcon={<ArrowForwardIosIcon/>} disableRipple>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'error'} disableRipple>{<ArrowForwardIosIcon/>}</Button>
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
      <Button sx={{mr: 2}} variant={'contained'} color={'success'}disableRipple>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'success'} startIcon={<AddIcon/>}disableRipple>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'success'} endIcon={<ArrowForwardIosIcon/>} disableRipple>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'success'} disableRipple>{<ArrowForwardIosIcon/>}</Button>
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
      <Button sx={{mr: 2}} variant={'contained'} color={'warning'} disableRipple>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'warning'} startIcon={<AddIcon/>} disableRipple>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'warning'} endIcon={<ArrowForwardIosIcon/>} disableRipple>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'contained'} color={'warning'} disableRipple>{<ArrowForwardIosIcon/>}</Button>
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
      <Button sx={{mr: 2}}  variant={'outlined'} color={'primary'}disableRipple>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'primary'} startIcon={<AddIcon/>}disableRipple>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'primary'} endIcon={<ArrowForwardIosIcon/>}disableRipple>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'primary'}disableRipple>{<ArrowForwardIosIcon/>}</Button>
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
      <Button sx={{mr: 2}} variant={'outlined'} color={'error'} disableRipple>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'error'} startIcon={<AddIcon/>} disableRipple>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'error'} endIcon={<ArrowForwardIosIcon/>} disableRipple>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'error'} disableRipple>{<ArrowForwardIosIcon/>}</Button>
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
      <Button sx={{mr: 2}} variant={'outlined'} color={'success'} disableRipple>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'success'} startIcon={<AddIcon/>} disableRipple>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'success'} endIcon={<ArrowForwardIosIcon/>} disableRipple>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'success'} disableRipple>{<ArrowForwardIosIcon/>}</Button>
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
      <Button sx={{mr: 2}} variant={'outlined'} color={'warning'} disableRipple>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'warning'} startIcon={<AddIcon/>} disableRipple>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'warning'} endIcon={<ArrowForwardIosIcon/>} disableRipple>
        Button
      </Button>
      <Button sx={{mr: 2}}  variant={'outlined'} color={'warning'} disableRipple>{<ArrowForwardIosIcon/>}</Button>
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
