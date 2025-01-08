import React from "react";

export const CommonBadge = ({ status }: { status: string }) => {
  return (
    <div
      className={`inline-flex items-center justify-center px-4 py-1 rounded-md ${
        status === "Rejected" || status === "Disabled"
          ? "bg-[#FDE8E8]"
          : "bg-[#DEF7EC]"
      }`}
    >
      <span
        className={`${
          status === "Rejected" || status === "Disabled"
            ? "text-[#9B1C1C]"
            : "text-[#03543F]"
        } text-xs font-medium`}
      >
        {status}
      </span>
    </div>
  );
};
