import { Card } from "@/components/retroui/Card";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";

export default function Page() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
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
                            <Card.Description>
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
                            </Card.Description>
                        </Card.Content>
                    </div>
                </Card>
            </main>
        </div>
    );
}