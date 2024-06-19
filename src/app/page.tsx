import GlobeComponent from "@/components/globe";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <GlobeComponent />
      <main className="relative container py-24 pointer-events-none">
        <div className="grid grid-cols-2 w-full gap-6 pointer-events-none">
          <div className="flex flex-col gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Welcome</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>This is a card description.</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" size="lg">
                  Button
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Welcome</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>This is a card description.</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" size="lg">
                  Button
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
