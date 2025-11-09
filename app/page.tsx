'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Menu, Plus } from "lucide-react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar */}
      {sidebarOpen && (
        <aside className="w-64 border-r bg-muted/40 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <h1 className="font-semibold text-lg">PoC</h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(false)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          <ScrollArea className="flex-1">
            <div className="p-2 space-y-2">
              <Button variant="secondary" className="w-full justify-start gap-2">
                <Plus className="h-4 w-4" /> New Chat
              </Button>
              <Separator className="my-2" />
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground px-2">Recent</div>
                <Button variant="ghost" className="w-full justify-start">
                  Previous Chat 1
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Previous Chat 2
                </Button>
              </div>
            </div>
          </ScrollArea>
          <div className="p-4 border-t text-sm text-muted-foreground">
            Settings
          </div>
        </aside>
      )}

      {/* Main chat area */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b p-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h2 className="text-lg font-medium">New Chat</h2>
        </div>

        {/* Chat messages */}
        <ScrollArea className="flex-1 p-6 space-y-4">
          {/* Example messages */}
          <div className="flex justify-end">
            <div className="bg-primary text-primary-foreground p-3 rounded-2xl max-w-md">
              Hello, Winterbot-3000!
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-muted p-3 rounded-2xl max-w-md">
              Hi there! How can I help you today?
            </div>
          </div>
        </ScrollArea>

        {/* Input area */}
        <div className="border-t p-4 bg-background">
          <form className="flex items-center gap-2">
            <Input placeholder="Type your message..." className="flex-1" />
            <Button type="submit">Send</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
