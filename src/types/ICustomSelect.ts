import { AutocompleteProps, TextFieldProps, UseAutocompleteProps } from '@mui/material';

export interface ICustomSelect<T>
  extends Omit<
    AutocompleteProps<T, boolean | undefined, boolean | undefined, boolean | undefined>,
    'options' | 'renderInput'
  > {
  textFieldProps?: TextFieldProps;
  defaultOptions?: T[];
  handleValue(value?: T | T[]): void;
}

export interface IOption {
  id: string;
  isNew?: boolean;
  name: string;
}
