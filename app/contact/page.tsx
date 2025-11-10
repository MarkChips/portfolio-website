'use client';

import { Text } from "@/components/retroui/Text";
import { Label } from "@/components/retroui/Label";
import { Input } from "@/components/retroui/Input";
import { Textarea } from "@/components/retroui/Textarea";
import { Button } from "@/components/retroui/Button";

export default function Page() {
  // temporary form dump for dev environment
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent page reload
    const formData = new FormData(event.currentTarget);
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  }

  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-around py-32 px-16 bg-white dark:bg-black sm:items-start">
      <form onSubmit={handleSubmit} method="post">
        <Text as="h1">Contact Me</Text>
        <Label htmlFor="name">Your Name:</Label>
        <Input type="text" id="name" name="name" placeholder="Enter name..." />
        <Label htmlFor="email">Your Email:</Label>
        <Input type="email" id="email" name="email" placeholder="Enter email..." />
        <Label htmlFor="subject">Subject:</Label>
        <Input type="text" id="subject" name="subject" placeholder="What is your message about?" />
        <Label htmlFor="message">Message:</Label>
        <Textarea id="message" name="message" placeholder="Enter message..." className="mb-2" />
        <Button type="submit">Send</Button>
      </form>
    </main>
  );
}