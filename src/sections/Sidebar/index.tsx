import { useLocation } from "react-router-dom";
import { MobileSidebarHeader } from "@/sections/Sidebar/components/MobileSidebarHeader";
import { DesktopSidebarHeader } from "@/sections/Sidebar/components/DesktopSidebarHeader";
import { SidebarNavSection } from "@/sections/Sidebar/components/SidebarNavSection";
import { SidebarFooter } from "@/sections/Sidebar/components/SidebarFooter";

export const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-black text-white w-full md:w-52 flex flex-col overflow-y-auto">
      <MobileSidebarHeader />
      <DesktopSidebarHeader />
      <SidebarNavSection
        items={[
          {
            title: "Home",
            href: "/",
            label: "Home",
            linkVariant: isActive("/") ? "text-pink-300 border-t border-white/50" : "hover:text-pink-300 border-t border-white/50",
            iconVariant: "home",
          },
          {
            title: "Products",
            href: "/products",
            label: "Products",
            linkVariant: isActive("/products") ? "text-pink-300 border-t border-white/50" : "hover:text-pink-300 border-t border-white/50",
            iconVariant: "products",
          },
          {
            title: "Collaborators",
            href: "https://gumroad.com/collaborators",
            label: "Collaborators",
            linkVariant: "hover:text-pink-300 border-t border-white/50",
            iconVariant: "collaborators",
          },
          {
            title: "Checkout",
            href: "https://gumroad.com/checkout/discounts",
            label: "Checkout",
            linkVariant: "hover:text-pink-300 border-t border-white/50",
            iconVariant: "checkout",
          },
          {
            title: "Emails",
            href: "/emails",
            label: "Emails",
            linkVariant: isActive("/emails") ? "text-pink-300 border-t border-white/50" : "hover:text-pink-300 border-t border-white/50",
            iconVariant: "emails",
          },
          {
            title: "Workflows",
            href: "/workflows",
            label: "Workflows",
            linkVariant: isActive("/workflows") ? "text-pink-300 border-t border-white/50" : "hover:text-pink-300 border-t border-white/50",
            iconVariant: "workflows",
          },
          {
            title: "Sales",
            href: "/customers",
            label: "Sales",
            linkVariant: isActive("/customers") ? "text-pink-300 border-t border-white/50" : "hover:text-pink-300 border-t border-white/50",
            iconVariant: "sales",
          },
          {
            title: "Analytics",
            href: "/dashboard/sales",
            label: "Analytics",
            linkVariant: isActive("/dashboard/sales") ? "text-pink-300 border-t border-white/50" : "hover:text-pink-300 border-t border-white/50",
            iconVariant: "analytics",
          },
          {
            title: "Payouts",
            href: "/payouts",
            label: "Payouts",
            linkVariant: isActive("/payouts") ? "text-pink-300 border-t border-b border-white/50" : "hover:text-pink-300 border-t border-b border-white/50",
            iconVariant: "payouts",
          },
        ]}
      />
      <SidebarNavSection
        items={[
          {
            title: "Discover",
            href: "/discover",
            label: "Discover",
            linkVariant: isActive("/discover") ? "text-pink-300 border-t border-white/50" : "hover:text-pink-300 border-t border-white/50",
            iconVariant: "discover",
          },
          {
            title: "Library",
            href: "/library",
            label: "Library",
            linkVariant: isActive("/library") ? "text-pink-300 border-t border-b border-white/50" : "hover:text-pink-300 border-t border-b border-white/50",
            iconVariant: "library",
          },
        ]}
      />
      <SidebarFooter />
    </nav>
  );
};
