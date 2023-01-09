import React, { memo } from 'react';
import Box from '@mui/material/Box';
import { Controller, useFormContext } from 'react-hook-form';
import MessageWrapper from '../FormControls.styled';
import CustomSelect from '../../../UI/CustomSelect/CustomSelect';
import { ICustomSelect, IOption } from '../../../../types/ICustomSelect';

const FormSelect = <T extends IOption>(
  props: Omit<ICustomSelect<T> & { name: string }, 'handleValue'>
) => {
  const { textFieldProps, defaultOptions, name, ...otherAutocompleteProps } = props;
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
          const handleValue = (newValue: T) => {
            onChange(newValue);
          };
          return (
            <CustomSelect<T>
              defaultOptions={defaultOptions}
              getOptionLabel={(option) => (typeof option === 'string' ? option : option.name)}
              value={value}
              {...otherAutocompleteProps}
              textFieldProps={textFieldProps}
              handleValue={handleValue}
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

export default memo(FormSelect) as typeof FormSelect;
