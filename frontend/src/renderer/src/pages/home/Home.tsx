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
import MonacoEditor, { PlateEditor } from './components/Editor/MonacoEditor';

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
                <main className="grid flex-1 gap-4 w-full h-full">
                    <MonacoEditor />
                </main>
            </div>
        </div>
    )
}
