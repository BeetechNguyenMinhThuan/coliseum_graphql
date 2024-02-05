import { ReactNode } from "react";

interface IFormGroupProps {
  children: ReactNode;
}

function FormGroup(props: IFormGroupProps) {
  const { children } = props;
  return <div className="flex flex-col gap-y-3">{children}</div>;
}

export default FormGroup;
