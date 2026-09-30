[![oparts](https://img.shields.io/badge/∅-oparts-6a5acd)](https://github.com/elzup/oparts-spec)

# beacon-oparts

Tiny helpers for cataloging out-of-place artifacts.

```ts
import { createArtifact, isArtifact } from 'beacon-oparts'

const item = createArtifact('threaded screw embedded in quartz vein')
// { id: 'k3f9x2ab', foundAt: '2026-09-30T00:00:00.000Z', note: '...' }
```
