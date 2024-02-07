import React, { ReactNode } from "react";
import { DropdownProvider } from "./dropdown-context";
interface DropdownProps {
  children: ReactNode ;
  Option?: React.ComponentType<any>;
  Search?: ReactNode;
  Select?: React.ComponentType<any>;
  List?: React.ComponentType<any>;
}

export const Dropdown = ({ children, ...props }: DropdownProps) => {
  return (
    <DropdownProvider {...props}>
      <div className="relative inline-block w-full">{children}</div>
    </DropdownProvider>
  );
};

