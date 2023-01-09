import { ReactNode } from 'react';

interface IPaperComponent {
  loading?: boolean;
  children: ReactNode;
  setOpen(value: boolean): void;
}

export default IPaperComponent;
