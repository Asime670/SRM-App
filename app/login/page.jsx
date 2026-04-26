import LoginForm from "@/components/LoginForm";

/**
 * Login page wrapper
 */
export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <div className="w-full">
        <LoginForm />
      </div>
    </main>
  );
}
