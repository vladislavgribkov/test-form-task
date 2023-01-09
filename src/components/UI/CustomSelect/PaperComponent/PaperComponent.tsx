import React, { FC } from 'react';
import { Button, Paper } from '@mui/material';
import IPaperComponent from '../../../../types/IPeperComponent';

const PaperComponent: FC<IPaperComponent> = ({ loading, children, setOpen }) => {
  return (
    <Paper
      onMouseDown={(e) => {
        e.preventDefault();
      }}
    >
      {loading ? null : (
        <Button fullWidth onClick={() => setOpen(true)}>
          Add item
        </Button>
      )}
      {children}
    </Paper>
  );
};

export default PaperComponent;
