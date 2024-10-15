import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"

export const ContactForm = () => {
    return (
      <div className="flex">
        <Card className="mx-24">
        <CardHeader>
          <CardTitle> Let's build something awesome together!</CardTitle>
          <CardDescription> Interested in your project? Feel free to reach out. Let's discuss how I can help?</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email"  id="email" placeholder="Your Email" />
              </div>
              <div className="flex flex-col space-y-1.5 ">
                <Label htmlFor="email">Email</Label>
                <Input className="h-36" id="email" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="right-6">Submit</Button>
        </CardFooter>
      </Card>
      </div>
    );
  };
  