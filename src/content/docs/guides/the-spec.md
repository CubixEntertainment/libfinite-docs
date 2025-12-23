---
title: Specification
description: The libfinite developer spec
---

## The Libfinite "Spec"

When developing for libfinite, its important to be on the lookout for "quirks" about the library. In general these are important development rules when making a libfinite compliant application. When starting a project be sure to read the specification page for the Function Family. While each Function Family has their own specific rules there are a few universal ones.

1) You MUST create a FiniteShell to draw a window

While libfinite has a "power user" system, which allows you, the developer, to throw your custom functions into your game seemlessly without needing to rely on libfinite wrappers, for a window to be Infinite compliant, it must use a FiniteShell to manage it's status as window.

2) Mixing Function Families are fine except for `draw` and `render`.

When creating windows, you must decide between using Vulkan (FiniteRender) and Cairo (FiniteDraw). Mixing these two Function Families can cause massive issues when not being careful and it is not recommended. You should use custom cairo or built in game engine behavior to draw 2D Graphics on the screen.

3) _vars are indexing variables

libfinite uses _vars to refer to indexes of arrays with the same name. For example `shell._btns` refers to the number of buttons this shell has.
