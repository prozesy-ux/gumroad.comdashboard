import { SidebarNavItem } from "@/sections/Sidebar/components/SidebarNavItem";

export type SidebarNavSectionProps = {
  items: Array<{
    title: string;
    href: string;
    label: string;
    linkVariant: string;
    iconVariant: string;
  }>;
};

export const SidebarNavSection = (props: SidebarNavSectionProps) => {
  return (
    <section className="hidden md:block mb-12">
      {props.items.map((item, index) => (
        <SidebarNavItem
          key={index}
          title={item.title}
          href={item.href}
          label={item.label}
          linkVariant={item.linkVariant}
          iconVariant={item.iconVariant}
        />
      ))}
    </section>
  );
};
