"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import { MdxComponents } from "./MdxComponents";
type MdxContentProps = {
  code: string;
};

export function MdxContent({ code }: MdxContentProps) {
  const Component = useMDXComponent(code);

  return (
    <section>
      <Component components={MdxComponents} />
    </section>
  );
}
