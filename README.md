# Scrumble

Scrumble is my personal project to manage a scrum powered by [Vue](https://vuejs.org/) + [Vuetify](https://vuetifyjs.com/en/). It is heavily inspired by [Trello](https://trello.com/) and [Jira](https://www.atlassian.com/software/jira). The main purpose of this project is to create an easy-to-use scrum management tool for myself, but contribution is very welcomed.

## Project setup

A step by step series of examples that tell you how to get a development env running

1. Fork this repository

2. Clone forked repository to your machine

```
git clone https://github.com/<your-github-user>/scrumble-api.git
```

3. Create file named `.env`, then copy `example.env` and fill the details

## Guideline

### Install dependencies
```
yarn
```

### Add a dependency
```
yarn add <package-name>
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Contributing guideline
As a contributor, here are guidelines we would like you to follow:
- [Feature request and bug report](#feature-request-and-bug-report)
- [Branches](#branches)
- [Workflow](#workflow)
- [Commit Message Convention](#commit-message-convention)
- [Code review guideline](#code-review-guideline)

## Feature request and bug report
If you want to request new features or report bugs please open an issue with clear detail (template provided). Interesting features or critical bugs will be marked as TODO waiting for contribution, otherwise revision may be needed.

## Branches
There are mainly 3 branches in this project:
- `master` - This branch is **only** for production. You must not push to this branch.
- `staging` - This branch is for staging, which is used for QA. You should not push to this branch.
- `dev` - This branch stores the code in development. This is the branch to open pull request.

## Workflow
Please follow this workflow when working on an issue
1. Assign yourself for the issue.
2. Write code.
3. Commit and push to your `origin` repository.
4. Create a pull request to `upstream/dev` (template provided).
5. Wait for code review.
6. If change requested, fix it and push again.
7. If approved, just wait for PR to be merged.

## Commit Message Convention
In this repository, we use [gitmoji](https://gitmoji.carloscuesta.me/) for commit message. Please use **only one** gitmoji for each commit. For example:

```
✨ Add user resolver
```

## Code review guideline
Please make sure your PR follow this guideline or **it will be immediately rejected or requested to change**

* The code is formatted (run `yarn lint` before commit).
* Write appropriate tests when adding or updating features.
* The commit message is in the correct format.
