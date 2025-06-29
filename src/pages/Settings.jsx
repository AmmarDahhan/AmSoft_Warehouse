import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import {
  Sun,
  Moon,
  User,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
} from "lucide-react";
import MainLayout from "../MainLayout";

export default function Settings({ mode, toggleTheme }) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <MainLayout mode={mode} toggleTheme={toggleTheme} pageTitle="الإعدادت">
      <div
        className={`min-h-screen p-6 ${
          darkMode ? "bg-[#1e2235] text-white" : "bg-[#fffaf7] text-black"
        }`}
      >
        <div className="flex gap-6">
          <aside
            className={`w-[260px] rounded-2xl p-4 ${
              darkMode ? "bg-[#121420]" : "bg-[#fff3e6]"
            }`}
          >
            <div className="mb-8 text-2xl font-bold flex items-center gap-2">
              <img src="/logo.svg" alt="RockStock" className="w-6 h-6" />
              RockStock
            </div>
            <nav className="space-y-2 text-sm">
              {[
                "Home",
                "Products",
                "Calendar",
                "Entry Notes",
                "Exit Notes",
                "Receiving Notes",
                "Scrap Note",
                "Installation Reports",
                "Purchase Requests",
                "Custody Management",
                "Notification",
                "Users",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl px-3 py-2 hover:bg-orange-400/10 cursor-pointer"
                >
                  {item}
                </div>
              ))}
              <div className="bg-orange-500 text-white rounded-xl px-3 py-2">
                Setting
              </div>
            </nav>
            <div className="mt-6 text-sm text-orange-400 cursor-pointer">
              Logout
            </div>
          </aside>

          <main className="flex-1 space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold">Setting</h1>
              <Input placeholder="Search..." className="w-[200px]" />
            </div>

            <div className="flex gap-4">
              <Tabs defaultValue="profile" className="w-[240px]">
                <TabsList className="flex flex-col gap-2 items-start bg-transparent">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="password">Change password</TabsTrigger>
                  <TabsTrigger value="2f">2F verification</TabsTrigger>
                  <TabsTrigger value="delete">Delete account</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="flex-1 space-y-6">
                <Card
                  className={
                    darkMode ? "bg-[#292d41] text-white" : "bg-white text-black"
                  }
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-semibold">Theme Mode</h2>
                      <Switch
                        checked={darkMode}
                        onCheckedChange={() => setDarkMode(!darkMode)}
                      />
                      {darkMode ? (
                        <Moon className="text-yellow-400" />
                      ) : (
                        <Sun className="text-yellow-400" />
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className={
                    darkMode ? "bg-[#292d41] text-white" : "bg-white text-black"
                  }
                >
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-lg font-semibold">Basic Information</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        icon={<User />}
                        placeholder="First Name"
                        defaultValue="Malak"
                      />
                      <Input
                        icon={<User />}
                        placeholder="Last Name"
                        defaultValue="Mobark"
                      />
                      <Select defaultValue="Female">
                        <SelectTrigger>Gender</SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Female">Female</SelectItem>
                          <SelectItem value="Male">Male</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        icon={<CalendarDays />}
                        placeholder="Birthday"
                        defaultValue="5 Feb, 2004"
                      />
                      <Input
                        icon={<Mail />}
                        placeholder="Email"
                        defaultValue="malakmobark4@gmail.com"
                      />
                      <Input
                        icon={<Phone />}
                        placeholder="Phone"
                        defaultValue="+963 995658340"
                      />
                      <Input
                        icon={<MapPin />}
                        placeholder="Location"
                        defaultValue="Damascus"
                      />
                    </div>
                    <Button className="bg-orange-500 text-white">
                      Save changes
                    </Button>
                  </CardContent>
                </Card>

                <Card
                  className={
                    darkMode ? "bg-[#292d41] text-white" : "bg-white text-black"
                  }
                >
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-lg font-semibold">Change Password</h2>
                    <Input
                      placeholder="Enter current password"
                      type="password"
                    />
                    <Input placeholder="Enter new password" type="password" />
                    <Input placeholder="Confirm new password" type="password" />
                    <ul className="text-sm list-disc pl-5">
                      <li>One special character</li>
                      <li>Min 6 characters</li>
                      <li>One number (2 are recommended)</li>
                      <li>Change it often</li>
                    </ul>
                    <Button className="bg-orange-500 text-white">
                      Update password
                    </Button>
                  </CardContent>
                </Card>

                <Card
                  className={
                    darkMode ? "bg-[#292d41] text-white" : "bg-white text-black"
                  }
                >
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-lg font-semibold">
                      Two factor authentication
                    </h2>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Security Key</span>
                        <Button
                          variant="outline"
                          className="border-orange-500 text-orange-500"
                        >
                          Add
                        </Button>
                      </div>
                      <div className="flex justify-between">
                        <span>SMS number</span>
                        <span>0995658340</span>
                        <Button
                          variant="outline"
                          className="border-orange-500 text-orange-500"
                        >
                          Edit
                        </Button>
                      </div>
                      <div className="flex justify-between">
                        <span>Authentication app</span>
                        <Button
                          variant="outline"
                          className="border-orange-500 text-orange-500"
                        >
                          Set
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className={
                    darkMode ? "bg-[#292d41] text-white" : "bg-white text-black"
                  }
                >
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-lg font-semibold">
                      Delete your account
                    </h2>
                    <p className="text-sm">
                      When you delete your account, you lose access to Front
                      account services, and we permanently delete your personal
                      data. You can cancel the deletion for 14 days.
                    </p>
                    <div className="flex items-center gap-2">
                      <Checkbox id="delete-check" />
                      <Label htmlFor="delete-check">
                        Confirm that I want to delete my account
                      </Label>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="border-orange-500 text-orange-500"
                      >
                        Learn more
                      </Button>
                      <Button className="bg-orange-500 text-white">
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </MainLayout>
  );
}
