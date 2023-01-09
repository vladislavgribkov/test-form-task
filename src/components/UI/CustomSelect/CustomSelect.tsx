import React, { memo, useCallback, useEffect, useState } from 'react';
import { Autocomplete, AutocompleteValue, TextField } from '@mui/material';
import { ICustomSelect, IOption } from '../../../types/ICustomSelect';
import AddItemModal from '../../Modals/AddItemModal/AddItemModal';
import Option from './Option/Option';
import PaperComponent from './PaperComponent/PaperComponent';

const CustomSelect = <T extends IOption>(props: ICustomSelect<T>) => {
  const [open, setOpen] = useState<boolean>(false);

  const {
    textFieldProps,
    defaultOptions,
    value,
    handleValue,
    multiple,
    loading,
    ...otherAutocompleteProps
  } = props;
  const [options, setOptions] = useState<T[]>([]);

  useEffect(() => {
    if (defaultOptions) setOptions(defaultOptions);
  }, [defaultOptions]);

  const addOption = useCallback(
    (option: T) => {
      setOptions((prev) => {
        const newOption: T = { ...option, id: `${prev.length + 1}`, isNew: true } as T;
        const newArrayValues: T[] = [];
        if (Array.isArray(value)) {
          newArrayValues.push(...(value as T[]));
        }
        handleValue(multiple ? [...newArrayValues, newOption] : newOption);
        return [...prev, newOption];
      });
      setOpen(false);
    },
    [handleValue, multiple, value]
  );

  const removeOption = useCallback(
    (option: T) => {
      setOptions((prev) => prev.filter((prevOption) => prevOption.id !== option.id));
      if (Array.isArray(value)) {
        const values = value as T[];
        handleValue(values.filter((opt) => opt.id !== option.id));
        return;
      }
      handleValue({ name: '' } as T);
    },
    [handleValue, value]
  );

  const handleChange = useCallback(
    (e: React.SyntheticEvent, newValue: AutocompleteValue<unknown, unknown, unknown, unknown>) => {
      if (Array.isArray(newValue)) {
        handleValue([...(newValue as T[])]);
        return;
      }
      handleValue(newValue as T);
    },
    [handleValue]
  );

  return (
    <>
      <Autocomplete
        id="custom-select"
        size="small"
        multiple={multiple}
        disablePortal
        options={options}
        value={value}
        loading={loading}
        onChange={handleChange}
        disableCloseOnSelect
        renderInput={(params) => <TextField {...params} {...textFieldProps} />}
        isOptionEqualToValue={(option, val) => option?.id === val?.id}
        PaperComponent={({ children }) => (
          <PaperComponent setOpen={setOpen} loading={loading} children={children} />
        )}
        renderOption={(prop, option) => {
          return (
            <Option
              key={`${option.name}${option.id}`}
              option={option}
              removeOption={removeOption}
              optionProps={prop}
            />
          );
        }}
        {...otherAutocompleteProps}
      />
      <AddItemModal open={open} setOpen={setOpen} addOption={addOption} />
    </>
  );
};

export default memo(CustomSelect) as typeof CustomSelect;
