import { DashboardHeader } from "@/sections/MainContent/components/DashboardHeader";
import { GettingStartedSection } from "@/sections/GettingStartedSection";
import { EmptyStateSection } from "@/sections/EmptyStateSection";
import { ActivitySection } from "@/sections/ActivitySection";

export const MainContent = () => {
  return (
    <main className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full align-bottom overflow-auto">
      <div className="box-border caret-transparent max-w-full align-bottom">
        <DashboardHeader />
        <GettingStartedSection />
        <EmptyStateSection />
        <div className="box-border caret-transparent max-w-full align-bottom p-4 md:p-8"></div>
        <ActivitySection />
      </div>
    </main>
  );
};
