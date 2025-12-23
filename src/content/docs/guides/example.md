---
title: Example Project
description: A guide in my new Starlight docs site.
---

## A barebones project

Below is an example of a BAREBONES project that does nothing but set up a window and keep it alive. To start drawing to the screen check out the `finite_draw` or `finite_render` function families.

```c
#include <finite/draw.h>
#include <finite/log.h>

int main() {
    // create a new shell
    FiniteShell *myShell = finite_shell_init("wayland-0");

    if (!myShell) {
        FINITE_LOG_FATAL("Unable to init shell");
    }

    // to draw windows make a window
    finite_window_init(myShell);

    if (!myShell) {
        FINITE_LOG_FATAL("Unable to make shell");
    }

    // do rendering here

    // now just keep the window alive
    while (wl_display_dispatch(myShell->display) != -1) {
        // do per frame events here (such as finite_input_poll_keys())
    }
    // cleanup here
    wl_display_disconnect(myShell->display);
}
```

## Additional Examples

- Read [libfinite-examples](https://github.com/CubixEntertainment/infinite-docs/tree/master/docs/examples) in the libfinite repo
