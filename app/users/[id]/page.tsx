"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import HomeTab from "./components/HomeTab";
// import BusinessesTab from "./components/BusinessesTab";
// import SubscriptionsTab from "./components/SubscriptionsTab";
import KYCVerificationTab from "./components/KYCVerificationTab";
import PersonalInfoTab from "./components/PersonalInfoTab";
import CommonLayout from "@/components/common/CommonLayout";

const tabs = [
  { name: "Home", component: HomeTab },
  // { name: "Businesses", component: BusinessesTab },
  // { name: "Subscriptions", component: SubscriptionsTab },
  { name: "KYC Verification", component: KYCVerificationTab },
  { name: "Personal Info", component: PersonalInfoTab },
];

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("Home");

  const ActiveTabComponent =
    tabs.find((tab) => tab.name === activeTab)?.component || HomeTab;

  return (
    <div className="min-h-screen bg-gray-50/40">
      <div className="fixed w-[calc(100vw-280px)] border-b border-t bg-white shadow-sm z-10 items-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <Link href="/users">
                <ChevronLeft className="h-4 w-4" />
                Back
              </Link>
            </Button>
            <div className="flex space-x-1 rounded-lg bg-gray-100/80 p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={cn(
                    "px-3 py-1.5 text-sm rounded-md transition-colors",
                    activeTab === tab.name
                      ? "bg-white shadow-sm"
                      : "text-gray-500 hover:text-gray-900"
                  )}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <div className="w-[72px]" /> {/* Spacer to balance the layout */}
          </div>
        </div>
      </div>

      <CommonLayout className="pt-20">
        <ActiveTabComponent />
      </CommonLayout>
    </div>
  );
}
