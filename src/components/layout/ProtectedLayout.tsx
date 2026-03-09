import AuthGuard from "@/components/layout/AuthGuard";
import Navbar from "@/components/layout/Navbar";
import PageContainer from "@/components/layout/PageContainer";
import { Outlet } from "react-router-dom";

const ProtectedLayout = () => {
    return (
        <AuthGuard>
            <div className="min-h-screen bg-background">
                <Navbar />
                <PageContainer>
                    <Outlet />
                </PageContainer>
            </div>
        </AuthGuard>
    );
};

export default ProtectedLayout;