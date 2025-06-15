import type { WithClassName, WithId } from "@types";

export type SectionTokenProps = Partial<
  {
    wrapperClassName: WithClassName;
    img: string;
    name: string;
    description: string;
    link: string;
  } & WithId
>;
