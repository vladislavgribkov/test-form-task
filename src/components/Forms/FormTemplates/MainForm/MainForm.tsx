import React, { FC, useCallback } from 'react';
import MainFormWrapper from './MainForm.styled';
import { FormProvider, useForm } from 'react-hook-form';
import FormInput from '../../FormControls/FormInput/FormInput';
import { Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import CompanySelect from './CompanySelect/CompanySelect';
import PositionSelect from './PositionSelect/PositionSelect';
import IMainForm from '../../../../types/IMainForm';
import { MainFormDefaultValues, MainFormValidationSchema } from './MainForm.constants';

const MainForm: FC = () => {
  const methods = useForm({
    resolver: yupResolver(MainFormValidationSchema),
    defaultValues: MainFormDefaultValues
  });

  const onSubmit = useCallback((data: IMainForm) => {
    console.log(data);
  }, []);

  return (
    <FormProvider {...methods}>
      <MainFormWrapper onSubmit={methods.handleSubmit(onSubmit)}>
        <CompanySelect />
        <PositionSelect />
        <FormInput fullWidth name="text" label="Text" />
        <FormInput fullWidth name="description" label="Description" multiline rows={5} />
        <Button variant="contained" fullWidth type="submit">
          save
        </Button>
      </MainFormWrapper>
    </FormProvider>
  );
};

export default MainForm;
