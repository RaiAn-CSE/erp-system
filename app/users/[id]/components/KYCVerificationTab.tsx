"use client";

import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function KYCVerificationTab() {
  return (
    <div className="container mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">KYC Verification</h2>
        <p className="text-gray-500">
          Manage your information, subscriptions, and security.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm">
              1
            </div>
            <span className="text-gray-600 text-sm font-medium">Submit</span>
          </div>
          <div className="w-16 h-[2px] bg-gray-200" />
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm">
              2
            </div>
            <span className="text-gray-600 text-sm font-medium">Review</span>
          </div>
          <div className="w-16 h-[2px] bg-gray-200" />
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-sm">
              3
            </div>
            <span className="text-green-600 text-sm font-medium">Verified</span>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="font-medium text-green-900 mb-1">Verified</h3>
            <p className="text-green-700">
              Complete Your KYC Verification to Ensure Account Security
            </p>
          </div>
        </div>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-medium mb-6">Your KYC document</h3>

        <div className="space-y-6">
          <div>
            <div className="text-sm text-gray-500 mb-1">Document type</div>
            <div>ID</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-500 mb-2">Front</div>
              <div className="aspect-[4/2] rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src="/placeholder.svg"
                  alt="ID Front"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-2">Back</div>
              <div className="aspect-[4/2] rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src="/placeholder.svg"
                  alt="ID Back"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              variant="outline"
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            >
              Ask to resubmit
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
