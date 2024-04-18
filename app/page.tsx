import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal, PartyPopper, ArrowRight } from "lucide-react";

import AuthenticationForm from "@/components/landing/authenticationForm";
import { ModeToggle } from "@/components/modeToggle";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center gap-32 p-24">
      <div className="fixed bottom-10 right-10">
        <ModeToggle />
      </div>
      <div className="z-10 w-full max-w-5xl items-center gap-6 justify-between text-sm lg:flex">
        
        <div>
          <Alert>
          <PartyPopper className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            Register right now and browse all the volunteering opportunities in your community.
          </AlertDescription>
        </Alert>
        </div>

        <div className="fixed bottom-0 left-0 flex h-48 w-full font-mono items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <p className=" relaxed text-lg font-semibold text-gray-700 dark:text-gray-300">
              SupportVol
            </p>
          </a>
        </div>
      </div>

      <div>
        <AuthenticationForm isSignIn={true}/>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <a
          href="/community"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold flex items-center gap-2">
            Community{" "}
            <span className=" transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <ArrowRight />
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about communities including initiatives and projects taking place.
            Join and enjoy volunteering.
          </p>
        </a>

        <a
          href="/activity"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold flex items-center gap-2">
            My activity{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <ArrowRight />
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Quickly find activities you are currently involved in and manage your time effectively.
            Get your contribution chart.
          </p>
        </a>

        <a
          href="/feed"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold flex items-center gap-2">
            Feed{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <ArrowRight />
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Get the latest updates on activities, initiatives, and projects in your community.
            Stay informed and connected.
          </p>
        </a>

        <a
          href="/message"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold flex items-center gap-2">
            Message{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <ArrowRight />
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Send and receive messages from other volunteers and community leaders.
            Be up-to-date and happy networking.
          </p>
        </a>

        <a
          href="/learn"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold flex items-center gap-2">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <ArrowRight />
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn best practices in a volunteering task, earn certificates, badges, and recognition.
          </p>
        </a>
      </div>
    </main>
  );
}
