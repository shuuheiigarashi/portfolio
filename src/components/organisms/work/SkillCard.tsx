import React, { memo, VFC } from "react";
import { Card } from "../../molecules/Card";

type SkillCardProps = {
  title: string;
  contents: string;
  imageUrl?: string;
};

export const SkillCard: VFC<SkillCardProps> = memo(({ title, contents, imageUrl }) => {
  return (
    <Card title={title} contents={contents} imageUrl={imageUrl} />
  );
});
