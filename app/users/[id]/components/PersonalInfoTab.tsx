"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Upload, X } from "lucide-react";

interface PersonalInfo {
  firstName: string;
  lastName: string;
  gender: string;
  birthday: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
}

export default function PersonalInfoTab() {
  const [isEditing, setIsEditing] = useState(false);
  const [info, setInfo] = useState<PersonalInfo>({
    firstName: "Ratul",
    lastName: "Osman",
    gender: "Male",
    birthday: "1995-01-23",
    email: "ratul@gmail.com",
    phone: "+880 1827845903",
    address: "25/F, House 4, Road 2, Uttara",
    city: "Dhaka",
    country: "Bangladesh",
  });

  if (isEditing) {
    return (
      <>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-2">Personal information</h2>
          <p className="text-gray-500">
            Manage your information, subscriptions, and security.
          </p>
        </div>

        <div className="container mx-auto space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-6">Basic info</h3>
            <div className="space-y-6">
              <div>
                <Label className="mb-2 block">Profile picture</Label>
                <div className="flex items-start gap-6">
                  <div className="relative group">
                    <div className="h-24 w-24 rounded-lg border-2 border-dashed flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-blue-500">
                      <Upload className="w-5 h-5 text-gray-400" />
                      <span className="text-xs text-gray-500">
                        Upload image
                      </span>
                    </div>
                    <button
                      type="button"
                      className="absolute -top-2 -right-2 h-5 w-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="text-sm text-gray-500">
                    Allowed file types: PNG, JPG, GIF (Max. 2MB)
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input
                    id="firstName"
                    value={info.firstName}
                    onChange={(e) =>
                      setInfo({ ...info, firstName: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    value={info.lastName}
                    onChange={(e) =>
                      setInfo({ ...info, lastName: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select
                  value={info.gender.toLowerCase()}
                  onValueChange={(value) => setInfo({ ...info, gender: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthday">Birthday</Label>
                <Input
                  type="date"
                  id="birthday"
                  value={info.birthday}
                  onChange={(e) =>
                    setInfo({ ...info, birthday: e.target.value })
                  }
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-medium mb-6">Contact info</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={info.email}
                  onChange={(e) => setInfo({ ...info, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={info.phone}
                  onChange={(e) => setInfo({ ...info, phone: e.target.value })}
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-medium mb-6">Address</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={info.address}
                  onChange={(e) =>
                    setInfo({ ...info, address: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={info.city}
                  onChange={(e) => setInfo({ ...info, city: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select
                  value={info.country.toLowerCase()}
                  onValueChange={(value) =>
                    setInfo({ ...info, country: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bangladesh">Bangladesh</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="pakistan">Pakistan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          <div className="flex items-center justify-end gap-4">
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsEditing(false)}>Update</Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">Personal information</h2>
        <p className="text-gray-500">
          Manage your information, subscriptions, and security.
        </p>
      </div>

      <div className="container mx-auto space-y-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium">Basic info</h3>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditing(true)}
              className="text-blue-600"
            >
              Edit
            </Button>
          </div>
          <div className="flex items-start gap-6">
            <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-100">
              <Image
                src="/avatar2.jpg"
                alt="Profile"
                width={96}
                height={96}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-4 flex-1">
              <div>
                <div className="text-sm text-gray-500 mb-1">Name</div>
                <div>
                  {info.firstName} {info.lastName}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Gender</div>
                <div>{info.gender}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Birthday</div>
                <div>
                  {new Date(info.birthday).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Contact info</h3>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-500 mb-1">Email</div>
              <div>{info.email}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Phone</div>
              <div>{info.phone}</div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Address</h3>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-500 mb-1">Address</div>
              <div>{info.address}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">City</div>
              <div>{info.city}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Country</div>
              <div>{info.country}</div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
