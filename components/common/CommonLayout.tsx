import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

const CommonLayout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("py-8 w-full", className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </div>
  );
};

export default CommonLayout;
