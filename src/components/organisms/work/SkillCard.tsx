import React, { memo, VFC } from "react";
import { Card } from "../../molecules/Card";

type SkillCardProps = {
  title: string;
  contents: string;
};

export const SkillCard: VFC<SkillCardProps> = memo(({ title, contents }) => {
  return (
    <Card title={title} contents={contents} />
  );
});
