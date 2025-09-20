import type { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => (
  <section className="flex gap-5 overflow-x-auto px-8 py-5">{children}</section>
);

export default Container;
