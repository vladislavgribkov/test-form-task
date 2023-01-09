import React, { FC } from 'react';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { IOption } from '../../../../types/ICustomSelect';

const Option: FC<{
  option: IOption;
  optionProps: React.HTMLAttributes<HTMLLIElement>;
  removeOption(option: IOption): void;
}> = ({ option, optionProps, removeOption }) => {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}
    >
      <li style={{ width: '100%' }} {...optionProps}>
        {option.name}
      </li>
      {option?.isNew && (
        <IconButton
          color="error"
          onClick={(event) => {
            event.preventDefault();
            removeOption(option);
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default Option;
