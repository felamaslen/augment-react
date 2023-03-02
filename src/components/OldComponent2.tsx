import { ComponentType2 } from "react";

export const OldComponent2: ComponentType2<{ value: number }> = (props) => {
  return (
    <div>
      {props.value}
      {props.children}
    </div>
  );
};
