import React, { FC, memo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { TextFieldProps } from '@mui/material';
import MessageWrapper from '../FormControls.styled';

const FormInput: FC<{ name: string } & TextFieldProps> = ({ name, ...props }) => {
  const {
    control,
    formState: { errors }
  } = useFormContext();

  return (
    <Box sx={{ display: 'flex', position: 'relative' }}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => {
          return (
            <TextField
              value={value || ''}
              onChange={onChange}
              name={name}
              size="small"
              error={!!(errors && errors[name])}
              {...props}
            />
          );
        }}
      />
      {errors[name] && (
        <MessageWrapper>{errors[name]?.message as unknown as string}</MessageWrapper>
      )}
    </Box>
  );
};

export default memo(FormInput);
