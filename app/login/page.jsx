import LoginForm from "@/components/LoginForm";
import Image from "next/image";

/**
 * Redesigned Login page with a split-screen layout
 */
export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row bg-background">
      {/* Left Side: Hero Image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <Image 
          src="/auth-hero.png" 
          alt="Login Hero" 
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
        {/* Overlay gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
        
        {/* Bottom Text Overlay on Image */}
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <h2 className="text-4xl font-bold title-serif mb-4">Empowering Education</h2>
          <p className="text-lg opacity-90 max-w-md font-medium">
            Join thousands of educators managing student success with our intuitive tools.
          </p>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-slate-50 dark:bg-slate-900/50 lg:bg-background">
        <div className="w-full max-w-md">
          {/* Mobile Logo or Brand */}
          <div className="lg:hidden mb-10 text-center">
            <h1 className="text-3xl font-bold title-serif text-primary">SRM App</h1>
          </div>
          
          <LoginForm />
          
          <div className="mt-8 text-center text-slate-500 dark:text-slate-400 text-sm">
            <p>© 2026 Student Result Management App. All rights reserved.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
