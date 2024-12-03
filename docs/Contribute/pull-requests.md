# Pull Requests

All changes to source code is possible only via `Pull Requests` on GitHub.

- Every pull request should be "linked" to an issue.
- Create a branch using:

```shell
$ git clone https://github.com/eclipse-xpanse/xpanse
git fetch --all
git checkout -b my-branch origin/main
```

- Don't forget to periodically rebase your branch `git rebase -i origin/main`
- If you have a group of commits related to the same change, please squash your commits into one and force push to your branch.
- Test that your change works by adapting or adding tests.
- Follow the boy scout rule to "Always leave the campground cleaner than you found it."
- Build your changes,
  In case of xpanse App, make sure you do a build before doing a PR. and the build has to be successful

```shell
  $ mvn clean verify
```

- In case of xpanse UI and website, make sure the application starts without any errors and warnings:

```shell
  $ npm run start
```

- If your PR has conflicts with the main then rebase the branch. PRs with conflicts are unlikely to be applied
- Don't change too much in a PR. The smaller the PR the easier it's to review, apply and the faster it will be done
- Even if we're monitoring closely the PR, if you think your PR doesn't move forward fast enough, don't hesitate to
  ping in a PR comment to get some update.
