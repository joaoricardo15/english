#!/usr/bin/env python3
"""Capture a screenshot of the browser tab showing the dev server."""

import subprocess
import sys
import os

DEV_PORT = "8080"
DEV_URL = f"http://127.0.0.1:{DEV_PORT}"
OUTPUT_PATH = sys.argv[1] if len(sys.argv) > 1 else "/tmp/english-browser.png"

try:
    import Quartz.CoreGraphics as CG
except ImportError:
    print("Installing pyobjc-framework-Quartz...")
    subprocess.run([sys.executable, "-m", "pip", "install", "pyobjc-framework-Quartz"],
                   capture_output=True)
    import Quartz.CoreGraphics as CG

windows = CG.CGWindowListCopyWindowInfo(
    CG.kCGWindowListOptionOnScreenOnly, CG.kCGNullWindowID
)

browser_wid = None
for w in windows:
    owner = w.get("kCGWindowOwnerName", "")
    name = w.get("kCGWindowName", "")
    wid = w.get("kCGWindowNumber", "")
    if any(b in owner for b in ["Chrome", "Safari", "Firefox", "Arc", "Brave"]):
        if name and name != "":
            browser_wid = wid
            print(f"Found: {owner} — \"{name}\" (window {wid})")
            break

if not browser_wid:
    print("ERROR: No browser window found. Open the browser first.")
    sys.exit(1)

result = subprocess.run(
    ["screencapture", "-l", str(browser_wid), "-x", OUTPUT_PATH],
    capture_output=True, text=True
)

if result.returncode != 0:
    print(f"ERROR: screencapture failed: {result.stderr}")
    sys.exit(1)

print(f"Screenshot saved to: {OUTPUT_PATH}")
