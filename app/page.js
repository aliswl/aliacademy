import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-20">
      <main className="flex-1">
        <section className="container mx-auto px-0 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold select-none">
               Ali Academy
            </h1>
            <p className="text-muted-foreground text-lg mb-8 select-none">
              - Learn Today, Lead Tomorrow -
            </p>

            <div className="flex flex-col items-center gap-4">
              <Link href="/home">
                <Button size="lg" className="bg-black select-none cursor-pointer text-white hover:bg-gray-800 h-12 px-8 text-lg font-medium">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground select-none">
                Free forever, no credit card required. Start learning today and unlock your potential!
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
