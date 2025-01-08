import Image from "next/image";
import profileImg from "@/public/profileImg.svg";

interface HeaderProps {
  className?: string;
}

export function Header({ className = "" }: HeaderProps) {
  return (
    <div
      className={`flex items-center justify-between border-b px-8 py-4 bg-white ${className}`}
    >
      <h1 className="text-2xl font-semibold"></h1>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="font-medium">Ratul Osman</div>
          <div className="text-sm text-gray-500">Admin</div>
        </div>
        <div className="h-10 w-10 overflow-hidden rounded-full bg-black">
          <Image
            src={profileImg}
            alt="Profile"
            width={40}
            height={40}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
