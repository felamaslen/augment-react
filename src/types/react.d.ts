import * as React from "react";

type ComponentTypeCompat<P> = React.ComponentType<
  P & {
    children: React.ReactNode;
  }
>;

declare module "react" {
  type ComponentType<P = {}> = ComponentTypeCompat<P>;
  type ComponentType2<P = {}> = ComponentTypeCompat<P>;
}
