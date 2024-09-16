import SidebarDashboard from "../components/layouts/dashboard/NavPanel";
import Screen from "../components/layouts/dashboard/Screen";

function Dashboard() {
    return (<section className="flex h-screen">
        <SidebarDashboard />
        <Screen />
    </section>)
}

export default Dashboard;