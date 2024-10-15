"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faArrowLeft, faArrowRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"; // Import ikon panah

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <div className="relative"> {/* Tambahkan div relative untuk posisi panah */}
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "flex h-9 items-center justify-start rounded-lg bg-muted p-1 text-muted-foreground",
        "max-w-full overflow-x-auto scrollbar-hide", // Sembunyikan scrollbar
        className
      )}
      {...props}
    />
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-muted rounded-l-sm p-1 text-[#4f46e5]">
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-muted rounded-r-sm p-1 text-[#4f46e5]">
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  </div>
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:bg-indigo-600 data-[state=active]:text-white", // Warna untuk tab aktif
      "hover:bg-indigo-500 hover:text-white", // Warna saat hover
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
