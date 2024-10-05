import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardWithForm } from "./components/Card2";
import { ModeToggle } from "./components/DarkButton";

export default function Home() {
  return (
    <div>
      <ModeToggle />

      <Button></Button>
      <Card className="w-1/2 bg-red-400">
        <CardHeader className="">
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <CardWithForm />
    </div>
  );
}
