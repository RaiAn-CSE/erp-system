"use client";

import * as React from "react";
import {
  Frame,
  PieChart,
  CircleUserRound,
  BadgeDollarSign,
  SlidersHorizontal,
} from "lucide-react";

// import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
// import { NavUser } from "@/components/nav-user";
// import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroupLabel,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import profileImg from "@/public/profileImg.svg";

// This is sample data.
const data = {
  projects: [
    {
      name: "Employee",
      url: "/users",
      icon: CircleUserRound,
    },
    {
      name: "Payroll",
      url: "/payroll",
      icon: BadgeDollarSign,
    },
    {
      name: "Setup",
      url: "/setup",
      icon: SlidersHorizontal,
    },
  ],

  // user: {
  //   name: "shadcn",
  //   email: "m@example.com",
  //   avatar: "/avatars/shadcn.jpg",
  // },

  // navMain: [
  //   {
  //     title: "Settings",
  //     url: "#",
  //     icon: Settings2,
  //     items: [
  //       {
  //         title: "Salary Component",
  //         url: "/salary-component",
  //       },
  //       {
  //         title: "Salary Scale",
  //         url: "/salary-scale",
  //       },
  //       {
  //         title: "Office Shift",
  //         url: "/office-shift",
  //       },
  //       {
  //         title: "Employment Status",
  //         url: "/employment-status",
  //       },
  //       {
  //         title: "Department",
  //         url: "/department",
  //       },
  //       {
  //         title: "Designation",
  //         url: "/designation",
  //       },
  //       {
  //         title: "Holiday",
  //         url: "/holiday",
  //       },
  //     ],
  //   },
  // ],

  accounts: [
    {
      name: "Bank Accounts",
      url: "/bank-accounts",
      icon: Frame,
    },
    {
      name: "Income",
      url: "/income",
      icon: PieChart,
    },
    {
      name: "Expanse",
      url: "/expanse",
      icon: PieChart,
    },
    {
      name: "All Transactions",
      url: "/all-transactions",
      icon: PieChart,
    },
  ],

  projectManagement: [
    {
      name: "Projects",
      url: "/projects",
      icon: Frame,
    },
    {
      name: "Tasks",
      url: "/tasks",
      icon: PieChart,
    },
    {
      name: "Tickets",
      url: "/tickets",
      icon: PieChart,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <div className="flex flex-col justify-center items-center py-4">
          <Image
            src={profileImg}
            alt="Profile"
            width={40}
            height={40}
            className="h-15 w-15 object-cover rounded-full"
          />
          <p className="mt-2 font-semibold text-xl hidden lg:block">
            Dream Emirates
          </p>
        </div>
        <SidebarGroupLabel>Human Resource Management (HRM)</SidebarGroupLabel>
        <NavProjects projects={data.projects} />
        {/* <NavMain items={data.navMain} /> */}
        <SidebarGroupLabel>Accounts</SidebarGroupLabel>
        <NavProjects projects={data.accounts} />
        <SidebarGroupLabel>Project Management</SidebarGroupLabel>
        <NavProjects projects={data.projectManagement} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
