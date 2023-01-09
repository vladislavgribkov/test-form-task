import { Dialog, DialogProps, DialogTitle } from '@mui/material';
import React, { FC, ReactNode } from 'react';

const CustomModal: FC<{ children: ReactNode } & DialogProps> = ({ onClose, open, children }) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Add new item</DialogTitle>
      {children}
    </Dialog>
  );
};

export default CustomModal;
