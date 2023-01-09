import React, { FC, useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { FormProvider, useForm } from 'react-hook-form';
import FormWrapper from './AddNewItemForm.styled';
import FormInput from '../../FormControls/FormInput/FormInput';
import { Button } from '@mui/material';
import AddNewItemFormValidationSchema from './AddNewItemForm.constants';

interface IAddNewItemForm {
  name: string;
}

const AddNewItemForm: FC<{ addOption(option: unknown): void }> = ({ addOption }) => {
  const methods = useForm<IAddNewItemForm>({
    resolver: yupResolver(AddNewItemFormValidationSchema)
  });
  const onSubmit = useCallback(
    (data: IAddNewItemForm) => {
      addOption(data);
    },
    [addOption]
  );
  return (
    <FormProvider {...methods}>
      <FormWrapper
        onSubmit={(e) => {
          e.stopPropagation();
          methods.handleSubmit(onSubmit)(e);
        }}
      >
        <FormInput name="name" />
        <Button variant="outlined" fullWidth type="submit">
          add item
        </Button>
      </FormWrapper>
    </FormProvider>
  );
};

export default AddNewItemForm;
