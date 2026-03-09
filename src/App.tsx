import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedLayout from "./components/layout/ProtectedLayout";
import LoginPage from "@/pages/LoginPage";
import NotFound from "@/pages/NotFound";
import Spinner from "./components/ui/Spinner";
import { Toaster } from "sonner";

const DashboardPage = lazy(() => import("@/pages/DashboardPage"));
const RoomDetailPage = lazy(() => import("@/pages/RoomDetailPage"));
const BookingsPage = lazy(() => import("@/pages/BookingsPage"));

const Loader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <Spinner className="h-8 w-8 animate-spin" />
  </div>
);

const App = () => (
  <AuthProvider>
    <Toaster/>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route element={<ProtectedLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/rooms/:roomId" element={<RoomDetailPage />} />
            <Route path="/bookings" element={<BookingsPage />} />
          </Route>

          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </AuthProvider>
);

export default App;