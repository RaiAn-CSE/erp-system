"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
// import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  projects: [
    {
      name: "Users",
      url: "/users",
      icon: Frame,
    },
    {
      name: "Payroll",
      url: "/payroll",
      icon: PieChart,
    },
  ],

  // user: {
  //   name: "shadcn",
  //   email: "m@example.com",
  //   avatar: "/avatars/shadcn.jpg",
  // },

  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],

  navMain: [
    {
      title: "Setup",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Salary Component",
          url: "/salary-component",
        },
        {
          title: "Salary Scale",
          url: "/salary-scale",
        },
        {
          title: "Office Shift",
          url: "/office-shift",
        },
        {
          title: "Employment Status",
          url: "/employment-status",
        },
        {
          title: "Department",
          url: "/department",
        },
        {
          title: "Designation",
          url: "/designation",
        },
        {
          title: "Holiday",
          url: "/holiday",
        },
      ],
    },
  ],

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
      <SidebarHeader>{<TeamSwitcher teams={data.teams} />}</SidebarHeader>

      <SidebarContent>
        <SidebarGroupLabel>Human Resource Management (HRM)</SidebarGroupLabel>
        <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />
        <SidebarGroupLabel>Accounts</SidebarGroupLabel>
        <NavProjects projects={data.accounts} />
        <SidebarGroupLabel>Project Management</SidebarGroupLabel>
        <NavProjects projects={data.projectManagement} />
      </SidebarContent>

      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}

      <SidebarRail />
    </Sidebar>
  );
}
