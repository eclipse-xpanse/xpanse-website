# xpanse Website

[![xpanse-website-ci](https://github.com/eclipse-xpanse/xpanse-website/actions/workflows/xpanse-website-ci.yml/badge.svg)](https://github.com/eclipse-xpanse/xpanse-website/actions/workflows/xpanse-website-ci.yml) [![xpanse-website-deployment](https://github.com/eclipse-xpanse/xpanse-website/actions/workflows/xpanse-website-cd.yml/badge.svg)](https://github.com/eclipse-xpanse/xpanse-website/actions/workflows/xpanse-website-cd.yml)

xpanse website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## Installation

```
$ npm
```

## Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without
having to restart the server.

## Production Deployment

The website is currently deployed on Eclipse Foundation's infrastructure.
All changes that are pushed to `main` branch will trigger a re-deployment of the website.

In case the website needs to be deployed anywhere else, then run the below command and copy the contents generated in the
`build` folder to any server that can server static websites.

```shell
npm run build
```

## Icons

Free icons on this website are taken from [Lucide](https://lucide.dev/).

## Dependencies File

All third-party related content is listed in the [DEPENDENCIES](DEPENDENCIES) file.

## Vale Linter

We use [Vale Linter](https://vale.sh/) for our documentation validation. The linter is part of the CI job and any finding will make the job to fail.

### Running Vale Linter Locally

To run the Vale linter locally, we must download the rules packages manually to `.github/vale/styles` folder as mentioned below.

```shell
copy files from https://github.com/errata-ai/packages/tree/master/pkg/Google/Google to .github/vale/styles/Google
copy files from https://github.com/errata-ai/packages/tree/master/pkg/Microsoft/Microsoft to .github/vale/styles/Microsoft
```

Execute the linter by running the following commands

```shell
docker pull jdkato/vale
docker run --rm -v $(pwd)/.github/vale/styles:/styles --rm -v $(pwd):/docs -w /docs jdkato/vale .
```
