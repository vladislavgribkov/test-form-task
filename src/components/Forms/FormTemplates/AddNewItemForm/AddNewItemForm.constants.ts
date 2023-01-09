import * as Yup from 'yup';

const AddNewItemFormValidationSchema = Yup.object({
  name: Yup.string().required('Required')
});

export default AddNewItemFormValidationSchema;
