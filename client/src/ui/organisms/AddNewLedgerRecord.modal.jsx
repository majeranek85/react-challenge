import React from 'react';

import { ModalComponent } from 'ui/molecules/Modal';

export const AddNewLedgerRecord = ({description, open, setOpen, children}) => {
  return(
    <ModalComponent
      description={description}
      open={open}
      setOpen={setOpen}
      children={children}
    />
  )
}