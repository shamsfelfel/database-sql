"""dev-server.py - static server for authoring, with caching turned off.

    python scripts/dev-server.py [port]      # default 8077

Serves the repo root like `python -m http.server`, but sends
`Cache-Control: no-store`, so an edited page/script/style shows up on a plain
reload instead of being served from the browser cache. Use the plain
`http.server` (or just open index.html) when you want to test the real caching
and service-worker behaviour.
"""
import functools, http.server, os, socketserver, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def log_message(self, fmt, *args):
        sys.stderr.write('%s %s\n' % (self.address_string(), fmt % args))


class Server(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True


if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8077
    handler = functools.partial(NoCacheHandler, directory=ROOT)
    with Server(('127.0.0.1', port), handler) as httpd:
        print('SQL Lab dev server (no-store) on http://localhost:%d  root=%s' % (port, ROOT), flush=True)
        httpd.serve_forever()
