import React, { useState } from 'react';
import { ActionHeader, Button, Card, Page } from 'ui';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Grid } from '@mui/material';
import { BudgetTableWidget } from 'ui/organisms/BudgetTable.widget';
import { AddNewBudgetRecord } from 'ui/organisms/AddNewBudgetRecord.modal';

export const BudgetPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true)

  return (
    <Page title="Budżet">
      <AddNewBudgetRecord open={open} setOpen={setOpen} description='Zdefiniuj budżet'/>
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Budżet"
            renderActions={() => (
              <Button variant='contained' startIcon={<AddOutlinedIcon/>} onClick={handleOpen}>
                Zdefiniuj budżet
              </Button>
            )}
          />
        }
      >
        <Grid container>
          <Grid item xs={12}>
            <BudgetTableWidget />
          </Grid>
        </Grid>
      </Card>
    </Page>
  );
};
