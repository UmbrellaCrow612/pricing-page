"use client";

import {
  Braces,
  ChevronDown,
  Cloud,
  Database,
  Github,
  Globe,
  MessageCircle,
  MessageSquare,
  PlusCircle,
  Users,
} from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LifeBuoy } from "lucide-react";
import { LogOut } from "lucide-react";
import { Plus } from "lucide-react";
import { Mail } from "lucide-react";
import { UserPlus } from "lucide-react";
import { Keyboard } from "lucide-react";
import { Settings } from "lucide-react";
import { CreditCard } from "lucide-react";
import { User } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between max-w-screen-xl px-10 mx-auto h-14">
        <button className="outline-[#d3e5ff] outline-offset-2 relative ring-offset-4 transition-all ease-in-out">
          <LogoSvg />
        </button>

        <DesktopLinks />

        <div className="items-center hidden gap-3 lg:flex">
          <Button>Contact</Button>
          <AvatarProfile />
        </div>
      </nav>
    </>
  );
}

const DesktopLinks = () => {
  return (
    <div className="hidden gap-3 lg:flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size={"sm"} variant={"ghost"}>
            Features <ChevronDown className="w-3 h-3 ml-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <MessageCircle className="w-4 h-4 mr-2" />
            <span>Previews</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Braces className="w-4 h-4 mr-2" />
            <span>Next js</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ActivitySvg />
            <span className="ml-2">Analytics</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LayerSvg />
            <span className="ml-2">Infrastructure</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Globe className="w-4 h-4 mr-2" />
            <span>Edge Functions</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Database className="w-4 h-4 mr-2" />
            <span>Storage</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button size={"sm"} variant={"ghost"}>
        Docs
      </Button>
      <Button size={"sm"} variant={"ghost"}>
        Templates
      </Button>
      <Button size={"sm"} variant={"ghost"}>
        Integrations
      </Button>
      <Button size={"sm"} variant={"ghost"}>
        Customers
      </Button>
      <Button size={"sm"} variant={"ghost"}>
        Enterprise
      </Button>
      <Button size={"sm"} variant={"secondary"}>
        Pricing
      </Button>
    </div>
  );
};

const AvatarProfile = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar tabIndex={0}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="w-4 h-4 mr-2" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className="w-4 h-4 mr-2" />
              <span>Billing</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="w-4 h-4 mr-2" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Keyboard className="w-4 h-4 mr-2" />
              <span>Keyboard shortcuts</span>
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Users className="w-4 h-4 mr-2" />
              <span>Team</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <UserPlus className="w-4 h-4 mr-2" />
                <span>Invite users</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Mail className="w-4 h-4 mr-2" />
                    <span>Email</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare className="w-4 h-4 mr-2" />
                    <span>Message</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <PlusCircle className="w-4 h-4 mr-2" />
                    <span>More...</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              <Plus className="w-4 h-4 mr-2" />
              <span>New Team</span>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Github className="w-4 h-4 mr-2" />
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LifeBuoy className="w-4 h-4 mr-2" />
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Cloud className="w-4 h-4 mr-2" />
            <span>API</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="w-4 h-4 mr-2" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

const LogoSvg = () => {
  return (
    <>
      <svg
        aria-label="Vercel Logotype"
        fill="#000"
        height="26"
        viewBox="0 0 283 64"
      >
        <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"></path>
      </svg>
    </>
  );
};

const ActivitySvg = () => {
  return (
    <>
      <svg
        fill="none"
        height="16"
        width="16"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    </>
  );
};

const LayerSvg = () => {
  return (
    <>
      <svg
        fill="none"
        height="16"
        width="16"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    </>
  );
};