import TextGif from "@/components/ui/text-gif";
import { Card } from '@/components/retroui/Card';
import { Text } from "@/components/retroui/Text";
import { Avatar } from "@/components/retroui/Avatar";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import Image from "next/image";

export default function Home() {
  return (
    // <main className="flex grow w-full max-w-3xl flex-col bg-white dark:bg-black">
    <main className="h-[calc(100vh-56px)] snap-y snap-mandatory scroll-smooth overflow-y-scroll w-screen">
      <div className="flex flex-col items-center">

        <section className="snap-start h-screen py-40 space-y-2 max-w-3xl">
          <TextGif text="Mark Chipperfield" gifUrl="https://media.giphy.com/media/4bhs1boql4XVJgmm4H/giphy.gif" />
          <Text as="h4">Full-Stack Software Developer</Text>
          <Card>
            <div className="flex justify-between items-center">
              <Card.Header>
                <Card.Title>Hello World! 👋</Card.Title>
                <Card.Description>
                  Hello and welcome to my website. Here you can explore my projects, see my work experience, and even contact me. Scroll down for more. ⬇️
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
        </section>

        <section className="snap-start h-screen md:py-20 max-w-3xl">
          <Text as="h3">About Me</Text>
          <p className="text-balance">
            From West Sussex, born and raised, on a computer spent most of my days. I can't continue like this. My life has taken many turns. I worked in Ecommerce for six years, but I wanted greater progression, so I started learning new skills. I began by trying to learn Data Science which was an intesting albeit advanced choice to make. After struggling with machine learning, I then turned my eye to boat building. I enjoyed working in the intense team-based environment, but my allergies prevented me from further pursuing that path.
            <br /><br />
            Afterwards I briefly considered joining the navy, but then I came across a full-stack software development Code Institute bootcamp. This was a great environment for me to learn in: tutor support and a community of students. I learnt HTML, CSS, JavaScript, Python, and Django in that order. It gave me the experience of both working in teams and independently. I passed with flying colours.
            <br /><br />
            Since then I have been applying and continuing to learn: trying out new languages and frameworks, publishing projects. I am currently helping relaunch a Church website, and I also do some Prompt Engineering for DataAnnotation.Tech. I am eager for my first software development role to put all my skills to the test.
          </p>
        </section>

        <section className="snap-start h-screen py-40">
          <Text as="h3">My Expertise</Text>
          <ul>
            <li className="flex space-x-2">
              Languages:
              <Image
                className="ms-2"
                width={40}
                height={40}
                src="/brands/python.svg"
                alt="Python"
              />
              <Image
                width={40}
                height={40}
                src="/brands/javascript.svg"
                alt="JavaScript"
              />
              <Image
                width={40}
                height={40}
                src="/brands/typescript.svg"
                alt="TypeScript"
              />
              <Image
                width={40}
                height={40}
                src="/brands/csharp.svg"
                alt="C Sharp"
              />
              <Image
                width={40}
                height={40}
                src="/brands/html5.svg"
                alt="HTML5"
              />
              <Image
                width={40}
                height={40}
                src="/brands/css.svg"
                alt="CSS"
              />
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
          {/* Task: Adjust width to match button */}
          <a href="/docs/Mark-Chipperfield-CV.pdf" download>
            <Button>
              Download my CV
            </Button>
          </a>
        </section>

      </div>
    </main>
  );
}
