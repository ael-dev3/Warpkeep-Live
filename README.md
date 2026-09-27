# Warpkeep Live

This public repository contains only the generated frontend for the currently live Warpkeep Alpha. The development source and 0.4 release controls remain in the private [Warpkeep repository](https://github.com/ael-dev3/Warpkeep).

The deployed Alpha 0.3.43 build was reproduced from source commit [`f39d57c`](https://github.com/ael-dev3/Warpkeep/commit/f39d57c8622077e6543a16e5610d0e4ec73910da). Its rebuilt `index.html` has SHA-256 `e8139922fac3619edff5cbece46a3d9516b75b2b26801935068459502b57d061`, matching the last successful production deployment. The previous complete Pages artifact has expired, so this does not claim byte-for-byte identity for every asset.

`CNAME` binds the site to [warpkeep.com](https://warpkeep.com/), `.nojekyll` serves the built files as-is, and `404.html` provides the single-page app fallback. Do not put source, credentials, or unpublished 0.4 builds here. Publish a future release only after its source, generated build, live backend, and release checks are verified.
