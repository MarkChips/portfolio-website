import { Text } from "@/components/retroui/Text";
import { Label } from "@/components/retroui/Label";
import { Input } from "@/components/retroui/Input";
import { Textarea } from "@/components/retroui/Textarea";
import { Button } from "@/components/retroui/Button";

export default function Page() {
  return (
    <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-around py-32 px-16 bg-white dark:bg-black sm:items-start">
      <form action="" method="post">
        <Text as="h1">Contact Me</Text>
        <Label htmlFor="name">Your Name:</Label>
        <Input type="text" id="name" placeholder="Enter name..." />
        <Label htmlFor="email">Your Email:</Label>
        <Input type="email" id="email" placeholder="Enter email..." />
        <Label htmlFor="subject">Subject:</Label>
        <Input type="text" id="subject" placeholder="What is your message about?" />
        <Label htmlFor="message">Message:</Label>
        <Textarea id="message" placeholder="Enter message..." />
        <Button type="submit">Submit</Button>
      </form>
    </main>
  );
}