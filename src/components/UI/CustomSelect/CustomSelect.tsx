import React, { memo, useCallback, useEffect, useId, useMemo, useState } from 'react';
import { Autocomplete, Button, Paper, TextField } from '@mui/material';
import { ICustomSelect, IOption } from '../../../types/ICustomSelect';
import AddItemModal from '../../Modals/AddItemModal/AddItemModal';
import Option from './Option/Option';

const CustomSelect = <T extends IOption>(props: ICustomSelect<T>) => {
  const id = useId();
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
  const defaultValue = useMemo(() => (multiple ? [] : ''), [multiple]);

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

  return (
    <>
      <Autocomplete
        id="custom-select"
        size="small"
        {...otherAutocompleteProps}
        multiple={multiple}
        openOnFocus
        disablePortal
        options={options}
        value={value || defaultValue}
        loading={loading}
        onChange={(event, newValue) => {
          if (Array.isArray(newValue)) {
            handleValue([...(newValue as T[])]);
            return;
          }
          handleValue(newValue as T);
        }}
        disableCloseOnSelect
        renderInput={(params) => <TextField {...params} {...textFieldProps} />}
        isOptionEqualToValue={(option, val) => option.id === val.id}
        disableListWrap={false}
        PaperComponent={({ children }) => (
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
        )}
        renderOption={(prop, option) => {
          return (
            <Option
              key={`${id}${option.id}`}
              option={option}
              removeOption={removeOption}
              optionProps={prop}
            />
          );
        }}
      />
      <AddItemModal open={open} setOpen={setOpen} addOption={addOption} />
    </>
  );
};

export default memo(CustomSelect) as typeof CustomSelect;
