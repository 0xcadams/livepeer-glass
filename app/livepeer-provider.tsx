"use client";

import {
  createReactClient,
  getCssText,
  LivepeerConfig,
  studioProvider,
} from "@livepeer/react";
import { useServerInsertedHTML } from "next/navigation";

const client = createReactClient({
  provider: studioProvider({
    apiKey: process.env.NEXT_PUBLIC_LIVEPEER_CORS_API_KEY ?? "",
  }),
});

export function LivepeerProvider({ children }: React.PropsWithChildren<{}>) {
  useServerInsertedHTML(() => {
    return (
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
    );
  });
  
  return <LivepeerConfig client={client}>{children}</LivepeerConfig>;
}
