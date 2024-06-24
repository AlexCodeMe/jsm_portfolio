import * as Sentry from "@sentry/nextjs";

if (typeof window !== "undefined") {
  Sentry.init({
    dsn: "https://208075647a91bffc25d9ee6e90223fc6@o4506916728209408.ingest.us.sentry.io/4507488169689088",
    tracesSampleRate: 1,
    debug: false,
    replaysOnErrorSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    integrations: [
      Sentry.replayIntegration({
        maskAllText: true,
        blockAllMedia: true,
      }),
      Sentry.feedbackIntegration({
        colorScheme: "light",
      }),
    ],
  });
  console.log("Sentry initialized.")
}
