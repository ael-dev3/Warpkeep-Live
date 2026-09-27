# Warpkeep Live

This public repository serves the generated frontend for the Warpkeep Alpha at
[warpkeep.com](https://warpkeep.com/). Development source and 0.4 release controls
remain in the private `ael-dev3/Warpkeep` repository.

The current Alpha 0.3.43 payload was built from signed private source commit
`d1cc6a9f04673e40b98982fae205416644db1181`. It repairs QR sign-in when a
player's browser clock trails the authentication bridge by a small amount. The
bridge, session expiry, and gameplay rules are unchanged. The production build
passed the focused authentication tests, TypeScript, runtime asset checks, Pages
release configuration checks, Mini App verification, and file-size policy.
Its `index.html` SHA-256 is
`24affe33cbd92aa68cd684bd6f5f38c4380bb8c62ca02bd449c22d1b0ce91446`;
`404.html` is byte-for-byte identical for single-page app routing.

The original restored Alpha 0.3.43 build came from private source
`f39d57c8622077e6543a16e5610d0e4ec73910da`. Its rebuilt `index.html`
matched the last successful old production deployment. The complete historical
Pages artifact had expired, so that match never established byte-for-byte
identity for every old asset. The restoration was published in
[`3e9170f`](https://github.com/ael-dev3/Warpkeep-Live/commit/3e9170fdc14e5b73083db7dd381de77236d4f06c).

`CNAME` binds the site to the apex domain and `.nojekyll` serves the built files
as-is. This repository contains no private source, credentials, or unpublished
0.4 build. A future release needs its own reviewed source, generated build,
backend, deployment, and player-session checks.

The public legal texts, notices, and license inventory came byte-for-byte from
the restored source and are unchanged by this auth hotfix. The licensing and
asset-provenance guides retain source classifications while identifying records
that remain in the private development repository. Warpkeep-authored software
follows [Apache-2.0](LICENSE); confirmed project-owned creative work follows
[CC BY 4.0](LICENSE-CC-BY-4.0). Third-party and unresolved-rights material
retains its own terms. The
[provenance-required classification](licenses/LicenseRef-Warpkeep-Provenance-Required.txt)
is not a license grant. See [licensing](LICENSING.md),
[asset provenance](ASSETS-LICENSE.md), the
[license inventory](docs/legal/license-inventory.md), [notices](NOTICE), and
[trademark scope](TRADEMARKS.md) before reuse.
