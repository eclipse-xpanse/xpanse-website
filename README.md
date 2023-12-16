# Xpanse Website

[![xpanse-website-ci](https://github.com/eclipse-xpanse/xpanse-website/actions/workflows/xpanse-website-ci.yml/badge.svg)](https://github.com/eclipse-xpanse/xpanse-website/actions/workflows/xpanse-website-ci.yml) [![xpanse-website-deployment](https://github.com/eclipse-xpanse/xpanse-website/actions/workflows/xpanse-website-cd.yml/badge.svg)](https://github.com/eclipse-xpanse/xpanse-website/actions/workflows/xpanse-website-cd.yml)

Xpanse website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without
having to restart the server.

### Production Deployment

The website is currently deployed on Eclipse Foundation's infrastructure.
All changes that are pushed to `main` branch will trigger a re-deployment of the website.

In case the website needs to be deployed anywhere else, then run the below command and copy the contents generated in the
`build` folder to any server that can server static websites.

```shell
npm run build
```

### Icons

Free icons on this website are taken from [Luicde](https://lucide.dev/).

## Dependencies File

All third-party related content is listed in the [DEPENDENCIES](DEPENDENCIES) file.
