# Warpkeep Live

This public repository serves the generated frontend for the Warpkeep Alpha at
[warpkeep.com](https://warpkeep.com/). Development source and 0.4 release controls
remain in the private `ael-dev3/Warpkeep` repository.

The current Alpha 0.3.43 payload was built from signed private source commit
`2d6811a861d42d7ca191ac30e2215176db1adabd`. It retains the bounded
browser clock-lag repair and distinguishes safe QR exchange failure stages for
invalid or expired completed requests, network reachability, and timeout. It
does not change the bridge protocol, session expiry, or gameplay rules. A
successful owner sign-in still requires a fresh phone-approved check. The
production build passed 221 focused authentication tests, TypeScript, runtime
asset checks, Pages release configuration checks, Mini App verification, and
file-size policy. Its `index.html` SHA-256 is
`eb1b0eafa2c116e8a6c47956f1e72324a828b17bb2f36740047ab53b8d91d5f3`;
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
