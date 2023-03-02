import { ComponentType } from "react";

export const OldComponent: ComponentType<{ value: number }> = (props) => {
  return (
    <div>
      {props.value}
      {props.children}
    </div>
  );
};
