# MIXIN Get Lightdom

Mixin to get the lightdom of a component and insert properties into it to be rendered.

# WHY

If we render in the shadow dom of a component, the content of this is inaccessible for the content indexing robots, since the content of the page is hidden in the shadow dom.
It also facilitates semantics, because in lightdom we can render a list of elements, with their role and aria tags, but then in shadow dom they can be any other html tag that we consider appropriate for the visualization that we want.

This mixin allows to obtain the elements of the lightdom of a component and insert them as properties in it. so that later we can render the way we want.

# USAGE

```javascript
import { LitElement, html, css } from "lit";
import { HTMLChildrenMixin } from "@manufosela/MixinGetlightdom";

export class KwHeader extends MixinGetlightdom(LitElement) {
  // ...
}
```

It uses the tags 'A', 'IMG', 'LI', 'VIDEO' by default to extract the lightdom. Other tags will be ignored.
If you want to use other tags, you can pass them as a parameter.

```javascript
export class KwHeader extends MixinGetlightdom(LitElement, ["A", "P"]) {
  // ...
}
```
