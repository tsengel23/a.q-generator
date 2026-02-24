"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { title } from "process";
import { create } from "domain";
// cn lib-s yaagaaaad duudaj oruulj ireed bna

const mockArticles = [
  { id: "1", title: "Genghis Khan", createdAt: "2024-02-23" },
  { id: "2", title: "Figma ашиглах заавар", createdAt: "2024-02-20" },
  { id: "3", title: "Санхүүгийн шийдвэрүүд", createdAt: "2024-02-18" },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon" className="sticky">
      <SidebarHeader className="flex flex-row items-center justify-between p-4">
        <h2 className="font-semibold text-lg group-data-[collapsible=icon]:hidden">
          History
        </h2>
        <SidebarTrigger />
      </SidebarHeader>

      <SidebarContent className="p-4">
        {mockArticles.length === 0 ? (
          <p className="text-gray-500 text-sm group-data-[collapsible=icon]:hidden">
            No articles yet
          </p>
        ) : (
          <div>
            {mockArticles.map((article) => (
              <Link
                key={article.id}
                href={`/article/${article.id}`}
                className={cn(
                  "block px-3 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors",
                  pathname === `/article/${article.id}` &&
                    "bg-gray-100 font-medium",
                )}
              >
                {article.title}
              </Link>
            ))}
          </div>
        )}
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}
