import TextGif from "@/components/ui/text-gif";
import { Card } from '@/components/retroui/Card';
import { Text } from "@/components/retroui/Text";
import { Avatar } from "@/components/retroui/Avatar";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-around py-32 px-16 bg-white dark:bg-black sm:items-start">
      <TextGif text="Mark Chipperfield" gifUrl="https://media.giphy.com/media/4bhs1boql4XVJgmm4H/giphy.gif" />
      <Text as="h4">Full-Stack Software Developer</Text>
      <Card>
        <div className="flex justify-between items-center">
          <Card.Header>
            <Card.Title>Hello World!</Card.Title>
            <Card.Description>
              I can not find what to write here.. so imagine I wrote some good
              stuff.
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <Avatar className="h-20 w-20">
              <Avatar.Image src="/profile-picture.jpg" alt="Profile picture" />
              <Avatar.Fallback>Chips</Avatar.Fallback>
            </Avatar>
          </Card.Content>
        </div>
      </Card>
      <section>
        <Text as="h3">About Me</Text>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt iusto, recusandae fugiat quos, aut optio, dolorum blanditiis dicta minima ab magni nam debitis iste explicabo consequatur alias accusantium neque dolor? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae autem officia asperiores cumque? Neque tempora fuga, quasi ab consectetur maiores ipsa rem fugit necessitatibus corrupti repudiandae officiis delectus eum quibusdam?</p>
      </section>
      <section>
        <Text as="h3">My Expertise</Text>
        <ul>
          <li>
            Languages:
            <Badge>Python</Badge>
            <Badge>JavaScript</Badge>
            <Badge>TypeScript</Badge>
            <Badge>C#</Badge>
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
          </li>
          <li>
            Frameworks:
            <Badge>Django</Badge>
            <Badge>Next.js</Badge>
            <Badge>SvelteKit</Badge>
            <Badge>Bootstrap</Badge>
            <Badge>TailwindCSS</Badge>
          </li>
          <li>
            Libraries:
            <Badge>Node.js</Badge>
            <Badge>React.js</Badge>
            <Badge>Playwright</Badge>
          </li>
          <li>
            Tools:
            <Badge>Lucidchart</Badge>
            <Badge>Git</Badge>
            <Badge>GitHub</Badge>
            <Badge>VS Code</Badge>
            <Badge>Heroku</Badge>
            <Badge>Vercel</Badge>
            <Badge>Balsamiq</Badge>
            <Badge>Blocs</Badge>
          </li>
          <li>
            Databases:
            <Badge>PostgreSQL</Badge>
            <Badge>SQL</Badge>
            <Badge>MongoDB</Badge>
          </li>
        </ul>
      </section>
      <a href="/docs/Mark-Chipperfield-CV.pdf" download>
        <Button>
          Download my CV
        </Button>
      </a>
    </main>
  );
}
