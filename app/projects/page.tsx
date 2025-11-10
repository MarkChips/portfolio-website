import { Card } from "@/components/retroui/Card";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";

export default function Page() {
  return (
    <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-around py-32 px-16 bg-white dark:bg-black sm:items-start">
      <Card>
        <div className="flex justify-around">
          <Card.Content className="flex items-center">
            <img
              className="p-0"
              src="https://picsum.photos/300"
              alt="image of the deployed website"
            />
          </Card.Content>
          <Card.Content>
            <Card.Header>
              <Card.Title>cablegate-search-app</Card.Title>
            </Card.Header>
            <Card.Description>
              Parsed 86,000 Cablegate documents from raw HTML to MongoDB BSON, leveraging TF-IDF for fast, scalable
              keyword search. Built a responsive front-end with SvelteKit and TailwindCSS, featuring pagination and
              advanced filtering. Deployed to Vercel for global accessibility.
            </Card.Description>
            <ul>
              <li>
                Deployment:
                <a href="https://cablegate-search-app-gray.vercel.app/" target="_blank" className="inline-block">
                  <Button variant="link">
                    https://cablegate-search-app-gray.vercel.app/
                  </Button>
                </a>
              </li>
              <li>
                Repository:
                <a href="https://github.com/MarkChips/cablegate-search-app" target="_blank" className="inline-block">
                  <Button variant="link">
                    https://github.com/MarkChips/cablegate-search-app
                  </Button>
                </a>
              </li>
              <li>
                Technologies used:
                <Badge>SvelteKit</Badge>
                <Badge>JavaScript</Badge>
                <Badge>TypeScript</Badge>
                <Badge>TailwindCSS</Badge>
                <Badge>MongoDB Atlas</Badge>
              </li>
            </ul>
          </Card.Content>
        </div>
      </Card>

      <Card>
        <div className="flex justify-around">
          <Card.Content className="flex items-center">
            <img
              className="p-0"
              src="https://picsum.photos/300"
              alt="image of the deployed website"
            />
          </Card.Content>
          <Card.Content>
            <Card.Header>
              <Card.Title>lunar-lists</Card.Title>
            </Card.Header>
            <Card.Description>
              Capstone full-stack task management site with a space theme. Built with Django (back-end) and Bootstrap 5.3 (front-end), supporting all CRUD operations, user authentication, and task prioritisation. Deployed to Heroku. Iteratively improved based on user feedback.
            </Card.Description>
            <ul>
              <li>
                Deployment:
                <a href="https://lunar-lists-658001c5b8b7.herokuapp.com/" target="_blank" className="inline-block">
                  <Button variant="link">
                    https://lunar-lists-658001c5b8b7.herokuapp.com/
                  </Button>
                </a>
              </li>
              <li>
                Repository:
                <a href="https://github.com/MarkChips/lunar-lists" target="_blank" className="inline-block">
                  <Button variant="link">
                    https://github.com/MarkChips/lunar-lists
                  </Button>
                </a>
              </li>
              <li>
                Technologies used:
                {[
                  "Django",
                  "Python",
                  "JavaScript",
                  "CSS",
                  "HTML",
                  "Bootstrap 5.3",
                  "PostgreSQL",
                  "Lucidchart"
                ].map((tool) => {
                  return <Badge key={tool}>{tool}</Badge>;
                })}
              </li>
            </ul>
          </Card.Content>
        </div>
      </Card>

      <Card>
        <div className="flex justify-around">
          <Card.Content className="flex items-center">
            <img
              className="p-0"
              src="https://picsum.photos/300"
              alt="image of the deployed website"
            />
          </Card.Content>
          <Card.Content>
            <Card.Header>
              <Card.Title>weather-web-app</Card.Title>
            </Card.Header>
            <Card.Description>
              3-day hackathon project: a weather forecast site with a rock-paper-scissors game twist. Used OpenWeatherMap API and Bootstrap 5.3 for UI. Led wireframing and UI design; implemented game logic. Received positive feedback for creativity and usability.
            </Card.Description>
            <ul>
              <li>
                Deployment:
                <a href="https://suba-suresh.github.io/weather-web-app/" target="_blank" className="inline-block">
                  <Button variant="link">
                    https://suba-suresh.github.io/weather-web-app/
                  </Button>
                </a>
              </li>
              <li>
                Repository:
                <a href="https://github.com/MarkChips/weather-web-app" target="_blank" className="inline-block">
                  <Button variant="link">
                    https://github.com/MarkChips/weather-web-app
                  </Button>
                </a>
              </li>
              <li>
                Technologies used:
                {[
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Bootstrap 5.3"
                ].map((tool) => {
                  return <Badge key={tool}>{tool}</Badge>;
                })}
              </li>
            </ul>
          </Card.Content>
        </div>
      </Card>

      <Card>
        <div className="flex justify-around">
          <Card.Content className="flex items-center">
            <img
              className="p-0"
              src="https://picsum.photos/300"
              alt="image of the deployed website"
            />
          </Card.Content>
          <Card.Content>
            <Card.Header>
              <Card.Title></Card.Title>
            </Card.Header>
            <Card.Description>

            </Card.Description>
            <ul>
              <li>
                Deployment:
                <a href="" target="_blank" className="inline-block">
                  <Button variant="link">

                  </Button>
                </a>
              </li>
              <li>
                Repository:
                <a href="" target="_blank" className="inline-block">
                  <Button variant="link">

                  </Button>
                </a>
              </li>
              <li>
                Technologies used:
                {[

                ].map((tool) => {
                  return <Badge key={tool}>{tool}</Badge>;
                })}
              </li>
            </ul>
          </Card.Content>
        </div>
      </Card>

    </main>
  );
}