"use client";

import { useState } from "react";
import { DataTable, type Column } from "@/components/ui/data-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import CommonLayout from "@/components/common/CommonLayout";
import { CommonBadge } from "@/components/common/CommonBadge";

const users = [
  {
    id: "01",
    uid: "U001",
    name: (
      <Link href={`/admin/users/01`}>
        <div className="flex items-center gap-3">
          <Avatar className="h-[32px] w-[32px]">
            <AvatarImage src="/avatar3.jpg" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          Andrew
        </div>
      </Link>
    ),
    email: "andrew@gmail.com",
    kycStatus: <CommonBadge status={"Approved"} />,
    accStatus: <CommonBadge status={"Disabled"} />,
    role: (
      <Select defaultValue="admin">
        <SelectTrigger className="w-[130px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="moderator">Moderator</SelectItem>
          <SelectItem value="editor">Editor</SelectItem>
        </SelectContent>
      </Select>
    ),
    actions: (
      <div className="flex items-center justify-end gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href={`/users/01`}>View</Link>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ),
  },
  {
    id: "02",
    uid: "U002",
    name: (
      <Link href={`/admin/users/02`}>
        <div className="flex items-center gap-3">
          <Avatar className="h-[32px] w-[32px]">
            <AvatarImage src="/avatar3.jpg" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          Andrew
        </div>
      </Link>
    ),
    email: "jake@gmail.com",
    kycStatus: <CommonBadge status={"Rejected"} />,
    accStatus: <CommonBadge status={"Disabled"} />,
    role: (
      <Select defaultValue="admin">
        <SelectTrigger className="w-[130px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="moderator">Moderator</SelectItem>
          <SelectItem value="editor">Editor</SelectItem>
        </SelectContent>
      </Select>
    ),
    actions: (
      <div className="flex items-center justify-end gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href={`/admin/users/02`}>View</Link>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ),
  },
  {
    id: "03",
    uid: "U003",
    name: (
      <Link href={`/admin/users/03`}>
        <div className="flex items-center gap-3">
          <Avatar className="h-[32px] w-[32px]">
            <AvatarImage src="/avatar3.jpg" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          Andrew
        </div>
      </Link>
    ),
    email: "mark@gmail.com",
    kycStatus: <CommonBadge status={"Rejected"} />,
    accStatus: <CommonBadge status={"Active"} />,
    role: (
      <Select defaultValue="admin">
        <SelectTrigger className="w-[130px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="moderator">Moderator</SelectItem>
          <SelectItem value="editor">Editor</SelectItem>
        </SelectContent>
      </Select>
    ),
    actions: (
      <div className="flex items-center justify-end gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href={`/admin/users/03`}>View</Link>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ),
  },
  {
    id: "04",
    uid: "U004",
    name: (
      <Link href={`/admin/users/04`}>
        <div className="flex items-center gap-3">
          <Avatar className="h-[32px] w-[32px]">
            <AvatarImage src="/avatar3.jpg" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          Andrew
        </div>
      </Link>
    ),
    email: "steven@gmail.com",
    kycStatus: <CommonBadge status={"Rejected"} />,
    accStatus: <CommonBadge status={"Disabled"} />,
    role: (
      <Select defaultValue="moderator">
        <SelectTrigger className="w-[130px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="moderator">Moderator</SelectItem>
          <SelectItem value="editor">Editor</SelectItem>
        </SelectContent>
      </Select>
    ),
    actions: (
      <div className="flex items-center justify-end gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href={`/admin/users/04`}>View</Link>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ),
  },
];

const allUsersColumns: Column[] = [
  { name: "SL", key: "id", isSorting: true, align: "left" },
  { name: "UID", key: "uid", isSorting: true, align: "left" },
  { name: "NAME", key: "name", isSorting: true, align: "left" },
  { name: "EMAIL", key: "email", isSorting: true, align: "left" },
  { name: "KYC STATUS", key: "kycStatus", isSorting: true, align: "left" },
  { name: "ACC. STATUS", key: "accStatus", isSorting: true, align: "left" },
  { name: "ACTIONS", key: "actions", align: "right" },
];

const employeesColumns: Column[] = [
  { name: "SL", key: "id", isSorting: true, align: "left" },
  { name: "UID", key: "uid", isSorting: true, align: "left" },
  { name: "NAME", key: "name", isSorting: true, align: "left" },
  { name: "EMAIL", key: "email", isSorting: true, align: "left" },
  { name: "ROLE", key: "role", isSorting: true, align: "left" },
  { name: "ACC. STATUS", key: "accStatus", isSorting: true, align: "left" },
  { name: "ACTIONS", key: "actions", align: "right" },
];

export default function UsersPage() {
  const [activeTab, setActiveTab] = useState<"all" | "employees">("all");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleTabChange = (tab: "all" | "employees") => {
    setActiveTab(tab);
    setPage(1);
  };

  const currentColumns =
    activeTab === "all" ? allUsersColumns : employeesColumns;
  const currentData =
    activeTab === "all"
      ? users
      : users.map((user) => ({ ...user, kycStatus: undefined }));

  return (
    <CommonLayout>
      <div className="px-4">
        <DataTable
          columns={currentColumns}
          data={currentData}
          isTab={true}
          tab1Name="All users"
          tab2Name="Employees"
          tab1Handler={() => handleTabChange("all")}
          tab2Handler={() => handleTabChange("employees")}
          page={page}
          pageSize={pageSize}
          totalItems={users.length}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
        />
      </div>
    </CommonLayout>
  );
}
