/* eslint-disable prettier/prettier */
import logo from '../../global/assets/img/logo_ofc.png'
import { ModeToggle } from "@renderer/global/components/mode-toggle";
import { Button } from "@renderer/global/components/ui/button";
import {
    Book,
    Bot,
    Code2,
    Folder,
    LifeBuoy,
    Settings2,
    SquareTerminal,
    SquareUser,
} from "lucide-react";
import { PlateEditor } from './components/Editor/PlateEditor';

export function Home() {
    return (
        <div className="grid h-screen w-full pl-[53px]">
            <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
                <div className="border-b p-[6px] grid place-items-center">
                    <Button variant="outline" size="icon" aria-label="Home">
                        <img src={logo} className="size-5 fill-foreground h-full w-full" />
                    </Button>
                </div>
                <nav className="grid gap-1 p-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-lg bg-muted"
                        aria-label="Playground"
                    >
                        <Folder className="size-5" />
                    </Button>

                    <ModeToggle />

                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-lg"
                        aria-label="Playground"
                    >
                        <SquareTerminal className="size-5" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-lg"
                        aria-label="Models"
                    >
                        <Bot className="size-5" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-lg"
                        aria-label="API"
                    >
                        <Code2 className="size-5" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-lg"
                        aria-label="Documentation"
                    >
                        <Book className="size-5" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-lg"
                        aria-label="Settings"
                    >
                        <Settings2 className="size-5" />
                    </Button>
                </nav>
                <nav className="mt-auto grid gap-1 p-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="mt-auto rounded-lg"
                        aria-label="Help"
                    >
                        <LifeBuoy className="size-5" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="mt-auto rounded-lg"
                        aria-label="Account"
                    >
                        <SquareUser className="size-5" />
                    </Button>
                </nav>
            </aside>
            <div className="flex flex-col">
                <main className="grid flex-1 gap-4 overflow-auto p-4">
                    <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
                        <PlateEditor />
                        {/* <Badge variant="outline" className="absolute right-3 top-3">
                            Output
                        </Badge>
                        <div className="flex-1" />
                        <form
                            className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring" x-chunk="dashboard-03-chunk-1"
                        >
                            <Label htmlFor="message" className="sr-only">
                                Message
                            </Label>
                            <Textarea
                                id="message"
                                placeholder="Type your message here..."
                                className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                            />
                            <div className="flex items-center p-3 pt-0">
                                <Button variant="ghost" size="icon">
                                    <Paperclip className="size-4" />
                                    <span className="sr-only">Attach file</span>
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <Mic className="size-4" />
                                    <span className="sr-only">Use Microphone</span>
                                </Button>
                                <Button type="submit" size="sm" className="ml-auto gap-1.5">
                                    Send Message
                                    <CornerDownLeft className="size-3.5" />
                                </Button>
                            </div>
                        </form> */}
                    </div>
                </main>
            </div>
        </div>
    )
}
