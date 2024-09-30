import React, { memo, VFC } from "react";
import { Card } from "../../molecules/Card";

type WorkCardProps = {
  imageUrl: string;
  title: string;
  contents: string;
  onClick: () => void;
};

export const WorkCard: VFC<WorkCardProps> = memo(({ imageUrl, title, contents, onClick }) => {
  return (
    <Card title={title} contents={contents} imageUrl={imageUrl} onClick={onClick} />
  );
});
