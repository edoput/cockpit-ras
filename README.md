Cockpit RAS
===========

Display your `ras-mc-ctl` output as a cockpit tool page.

## Install

Copy this directory to `/usr/local/share/cockpit`. Confirm the package is in
your installation by running `cockpit-bridge --packages`.

```
root@host:~# cockpit-bridge --packages
RAS                  RAS                                      /usr/local/share/cockpit/ras
...
```

