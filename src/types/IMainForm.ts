import { IOption } from './ICustomSelect';

interface IMainForm {
  company?: IOption;
  positions: IOption[];
  text: string;
  description: string;
}

export default IMainForm;
