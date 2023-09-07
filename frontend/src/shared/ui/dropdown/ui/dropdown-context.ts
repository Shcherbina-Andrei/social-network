import { ReactNode, createContext } from 'react';

type DropdownContextType = {
  currentElement?: ReactNode | null;
  setCurrentElement?: ((element: ReactNode) => void) | null;
  changeValue: ((value: string | number) => void) | null;
};

export const DropdownContext = createContext<DropdownContextType>({
  currentElement: null,
  setCurrentElement: null,
  changeValue: null,
});
