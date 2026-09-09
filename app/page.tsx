import { Home, ShoppingCart, Users, ShoppingBag, Calendar, Download } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import StatCard from "@/components/StatCard";
import SessionsCard from "@/components/SessionsCard";
import ProCard from "@/components/ProCard";
import ConversionGauge from "@/components/ConversionGauge";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 min-w-0 px-4 py-6 md:px-8">
        <Navbar />

        <div className="rounded-2xl bg-panel p-4 md:p-6">
          {/* Page header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-soft">
                <Home size={18} />
              </span>
              <h1 className="text-xl font-extrabold text-ink">Dashboard</h1>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2.5 text-sm font-medium text-ink">
                <Calendar size={15} className="text-ink-muted" />
                This Month
              </button>
              <button className="flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-soft">
                <Download size={15} />
                Download Report
              </button>
            </div>
          </div>

          {/* Top stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <StatCard
              icon={ShoppingCart}
              label="Total Sales"
              value="263k"
              change="15.6%"
              direction="up"
            />
            <StatCard
              icon={Users}
              label="Total Visitors"
              value="35k"
              change="6.2%"
              direction="down"
            />
            <StatCard
              icon={ShoppingBag}
              label="Total Orders"
              value="165k"
              change="3.5%"
              direction="up"
            />
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <SessionsCard />
            </div>
            <div className="flex flex-col gap-4">
              <ProCard />
              <ConversionGauge />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
