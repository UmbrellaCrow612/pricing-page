import { ArrowRight, Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

export default function SectionOne() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto h-[25rem] flex items-center justify-center flex-col gap-20">
        <h1 className="max-w-2xl font-bold leading-tight tracking-tighter text-center text-7xl">
          Find a plan to power your projects
        </h1>
      </section>

      <section className="max-w-screen-xl py-10 mx-auto">
        <div className="grid h-auto grid-cols-1 grid-rows-3 gap-10 px-5 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
          <Card>
            <CardHeader>
              <CardTitle>Hobby $0</CardTitle>
              <CardDescription>
                For personal or non-commercial projects.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <p className="flex items-center gap-4">
                <Check className="w-4 h-4" /> Deploy from CLI or personal git
                integrations
              </p>
              <p className="flex items-center gap-4">
                <Check className="w-4 h-4" /> Built-in CI/CD
              </p>
              <p className="flex items-center gap-4">
                <Check className="w-4 h-4" /> Automatic HTTPS/SSL
              </p>
              <p className="flex items-center gap-4">
                <Check className="w-4 h-4" /> Previews for every git push
              </p>
            </CardContent>
            <CardFooter>
              <Button variant={"outline"} className="justify-between w-full">
                Start Deploying <ArrowRight className="w-4 h-4" />
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pro $20 per user / month</CardTitle>
              <CardDescription>
                For team collaboration with advanced features.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <p className="flex items-center gap-4">
                <Check className="w-4 h-4" /> Up to 1TB of bandwidth
              </p>
              <p className="flex items-center gap-4">
                <Check className="w-4 h-4" /> Review your UI with team comments
                on Previews
              </p>
              <p className="flex items-center gap-4">
                <Check className="w-4 h-4" /> Unlimited function requests & 1000
                GB-hours of execution
              </p>
              <p className="flex items-center gap-4">
                <Check className="w-4 h-4" /> Email support
              </p>
            </CardContent>
            <CardFooter>
              <Button className="justify-between w-full">
                Upgrade now <ArrowRight className="w-4 h-4" />
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise Custom</CardTitle>
              <CardDescription>
                For teams with more security, support, and performance needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <p className="flex items-center gap-4">
                <Check className="w-4 h-4" /> SSO/SAML Login
              </p>
              <p className="flex items-center gap-4">
                <Check className="w-4 h-4" /> Enhanced observability & logging
              </p>
              <p className="flex items-center gap-4">
                <Check className="w-4 h-4" /> Isolated build infrastructure, on
                better hardware, with no queues
              </p>
              <p className="flex items-center gap-4">
                <Check className="w-4 h-4" /> Dedicated success manager & SLAs
              </p>
            </CardContent>
            <CardFooter>
              <Button className="justify-between w-full" variant={"outline"}>
                Contact Sales <ArrowRight className="w-4 h-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
}
