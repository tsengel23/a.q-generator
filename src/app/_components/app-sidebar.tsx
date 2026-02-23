import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { PanelRightOpen } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="sticky">
      <SidebarHeader className="flex flex-row items-center justify-between p-4">
        <h2 className="font-semibold text-lg group-data-[collapsible=icon]:hidden">
          History
        </h2>
        <SidebarTrigger />
      </SidebarHeader>

      <SidebarContent className="p-4">
        <p className="text-gray-500 text-sm group-data-[collapsible=icon]:hidden">
          No articles yet
        </p>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}
