import * as Yup from 'yup';
import IMainForm from '../../../../types/IMainForm';

export const MainFormValidationSchema = Yup.object({
  text: Yup.string().required('Required').min(5, 'min 5').max(10, 'max 10'),
  description: Yup.string().required('Required').min(5, 'min 5').max(10, 'max 10'),
  company: Yup.object().required('Required').nullable(),
  positions: Yup.array().required('Required').min(1, 'Required')
});

export const MainFormDefaultValues: IMainForm = {
  description: '',
  company: '',
  positions: [],
  text: ''
};
