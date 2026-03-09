import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Mail, Lock, House } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, loading } = useAuth();
  const [creds, setCreds] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!creds?.email || !creds?.password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    try {
      await login(creds?.email, creds?.password);
      navigate("/dashboard");
    } catch {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md animate-slide-up">
        <div className="text-center mb-8">
          <House className="h-10 w-10 text-primary mx-auto mb-3"/>
          <h1 className="text-2xl font-bold text-foreground">Welcome to staybnb</h1>
          <p className="text-muted-foreground mt-1">Log in to continue</p>
        </div>

        <div className="border border-border rounded-xl p-6 shadow-card">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  required
                  type="email"
                  value={creds.email}
                  onChange={(e) => setCreds({ ...creds, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg text-sm text-foreground bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  required
                  type={"password"}
                  value={creds.password}
                  onChange={(e) => setCreds({ ...creds, password: e.target.value })}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-10 py-3 border border-border rounded-lg text-sm text-foreground bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                />
              </div>
            </div>

            {error && (
              <p className="text-destructive text-sm font-medium">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-base transition-all hover:brightness-95 disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Continue"}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-border">
            <p className="text-center text-sm text-muted-foreground">
              Use any email & password to log in (mock auth)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
