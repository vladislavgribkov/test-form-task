import { IOption } from './ICustomSelect';

interface IMainForm {
  company?: IOption | string;
  positions: IOption[];
  text: string;
  description: string;
}

export default IMainForm;
