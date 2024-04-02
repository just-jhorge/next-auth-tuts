import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-red-500 to-blue-500">
      <div className="space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold text-white drop-shadow-md">
            🔒 Auth
          </h1>
          <p className="text-white text-lg">A simple authentication service</p>
        </div>
        <div>
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
