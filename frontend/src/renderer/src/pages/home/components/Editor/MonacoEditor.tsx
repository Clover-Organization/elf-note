/* eslint-disable prettier/prettier */
import { Badge } from "@renderer/global/components/ui/badge";
import { Button } from "@renderer/global/components/ui/button";
import { Label } from "@renderer/global/components/ui/label";
import { Textarea } from "@renderer/global/components/ui/textarea";
import { CornerDownLeft, Mic, Paperclip } from "lucide-react";

const MonacoEditor = () => {
    return (
        <>
            <Badge variant="outline" className="absolute right-3 top-3">
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
            </form>
        </>
    )
};

export default MonacoEditor;