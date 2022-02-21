import React from 'react';

import { ModalComponent } from 'ui/molecules/Modal';

export const AddNewBudgetRecord = ({description, open, setOpen}) => {
  return(
    <ModalComponent
      description={description}
      open={open}
      setOpen={setOpen}
    />
  )
}