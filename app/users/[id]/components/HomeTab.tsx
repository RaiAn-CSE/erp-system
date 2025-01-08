import Image from "next/image";
import profileImg from "@/public/profileImg.svg";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle2, ChevronRight } from "lucide-react";

export default function HomeTab() {
  return (
    <div className="container mx-auto">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
          <Image
            src={profileImg}
            alt="Profile"
            width={96}
            height={96}
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="mb-2 text-2xl font-semibold">Ratul Osman</h1>
        <p className="text-gray-500">
          Manage your information, subscriptions, and security.
        </p>
      </div>

      <div className="mb-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-white p-6">
          <div className="mb-4 h-16 w-16 rounded-lg bg-orange-400 p-4">
            <AlertCircle className="h-8 w-8 text-white" />
          </div>
          <h2 className="mb-2 text-xl font-semibold">Verify KYC</h2>
          <p className="mb-4 text-gray-500">
            Complete Your KYC Verification to Ensure Account Security
          </p>
          <Button className="flex items-center gap-2">
            Continue
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="rounded-lg border bg-white p-6">
          <div className="mb-4 h-16 w-16 rounded-lg bg-blue-400 p-4">
            <CheckCircle2 className="h-8 w-8 text-white" />
          </div>
          <h2 className="mb-2 text-xl font-semibold">
            Your account is secured
          </h2>
          <p className="mb-4 text-gray-500">Two-step verification is enabled</p>
        </div>
      </div>

      <div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Business profiles</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src="/prime.png"
                    alt="Prime"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Prime</h3>
                  <p className="text-sm text-gray-500">www.primejewlers.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-500" />
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <div className="h-2 w-2 rounded-full bg-cyan-500" />
                <ChevronRight className="ml-2 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src="/prime.png"
                    alt="Karnaphuli"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Karnaphuli</h3>
                  <p className="text-sm text-gray-500">www.primejewlers.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-500" />
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <div className="h-2 w-2 rounded-full bg-cyan-500" />
                <ChevronRight className="ml-2 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
