[![ooparts](https://img.shields.io/badge/∅-ooparts-6a5acd)](https://github.com/elzup/ooparts-spec)

# beacon-ooparts

Tiny helpers for cataloging out-of-place artifacts.

```ts
import { createArtifact, isArtifact } from 'beacon-ooparts'

const item = createArtifact('threaded screw embedded in quartz vein')
// { id: 'k3f9x2ab', foundAt: '2026-09-30T00:00:00.000Z', note: '...' }
```
