"use client";

import {
  createReactClient,
  LivepeerConfig,
  studioProvider,
} from "@livepeer/react";

const client = createReactClient({
  provider: studioProvider({
    apiKey: process.env.NEXT_PUBLIC_LIVEPEER_CORS_API_KEY ?? "",
  }),
});

export function LivepeerProvider({ children }: React.PropsWithChildren<{}>) {
  return <LivepeerConfig client={client}>{children}</LivepeerConfig>;
}
