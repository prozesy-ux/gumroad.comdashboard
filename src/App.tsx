import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "@/sections/Sidebar";
import { DashboardPage } from "@/pages/DashboardPage";
import { ProductsPage } from "@/pages/ProductsPage";
import { SalesPage } from "@/pages/SalesPage";
import { AnalyticsPage } from "@/pages/AnalyticsPage";
import { EmailsPage } from "@/pages/EmailsPage";
import { WorkflowsPage } from "@/pages/WorkflowsPage";
import { PayoutsPage } from "@/pages/PayoutsPage";
import { SettingsPage } from "@/pages/SettingsPage";
import { DiscoverPage } from "@/pages/DiscoverPage";
import { LibraryPage } from "@/pages/LibraryPage";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col md:flex-row h-screen bg-stone-100">
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/customers" element={<SalesPage />} />
          <Route path="/dashboard/sales" element={<AnalyticsPage />} />
          <Route path="/emails" element={<EmailsPage />} />
          <Route path="/workflows" element={<WorkflowsPage />} />
          <Route path="/payouts" element={<PayoutsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/library" element={<LibraryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
