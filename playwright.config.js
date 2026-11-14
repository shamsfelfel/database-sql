// @ts-check
/**
 * Playwright configuration.
 *
 * This repository's only suite is e2e/sw-invariants.spec.js, the shared
 * service-worker suite that every app on shamsfelfel.github.io runs. It needs
 * the site over http rather than file://, because a service worker only
 * exists in a secure context and localhost counts as one.
 *
 * One worker, no parallelism. Cache Storage is origin-wide, and the point of
 * that suite is what seven apps sharing one origin do to each other's caches.
 *
 * Port 8077, which is this repository's own dev-server default: the hub's
 * suite holds 8099 and the four generated courses default to it too, so a
 * distinct port is what lets this run while one of those is still shutting
 * down.
 */
const { defineConfig, devices } = require('@playwright/test');

const PORT = Number(process.env.PORT || 8077);

module.exports = defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  workers: 1,
  timeout: 90000,
  forbidOnly: !!process.env.CI,
  reporter: [['list']],

  use: {
    baseURL: `http://127.0.0.1:${PORT}`,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    reducedMotion: 'reduce',
  },

  webServer: {
    command: `python scripts/dev-server.py ${PORT}`,
    url: `http://127.0.0.1:${PORT}/index.html`,
    // Never inherit a server someone left running: it may be serving an
    // older build.
    reuseExistingServer: false,
    // This server logs a line per request, and a course precaching itself is
    // a hundred of them -- which would bury the test report it prints beside.
    stdout: 'ignore',
    stderr: 'ignore',
  },

  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 900 } },
    },
    { name: 'phone', use: { ...devices['Pixel 7'] } },
  ],
});
