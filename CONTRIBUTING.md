## Gitflow Workflow

In this project, we follow the Gitflow workflow for managing our codebase. The Gitflow workflow is a branching model that provides a structured approach to collaboration and release management. It helps us keep our codebase organized and facilitates parallel development.

### Branches

- **Master Branch**: The `master` branch represents the production-ready code. It should always contain the latest stable version of the application.

- **Develop Branch**: The `develop` branch is the main branch for ongoing development. All new features, bug fixes, and enhancements are merged into this branch.

- **Feature Branches**: Feature branches are created from the `develop` branch and are used to develop new features or make changes to existing functionality. Once a feature is complete, it is merged back into the `develop` branch.

- **Release Branches**: Release branches are created from the `develop` branch when we are preparing for a new release. They allow us to stabilize the codebase and perform any necessary last-minute fixes. Once a release is ready, it is merged into both the `main` branch and the `develop` branch.

- **Hotfix Branches**: Hotfix branches are created from the `main` branch and are used to quickly address critical bugs or issues in the production code. Once a hotfix is complete, it is merged into both the `main` branch and the `develop` branch.

### Pull Requests

When contributing to this project, please follow these guidelines for creating pull requests:

1. Fork the repository and create a new branch from the `develop` branch.
2. Make your changes and commit them to your branch.
3. Open a pull request targeting the `develop` branch.
4. Provide a clear and concise description of the changes you made.
5. Assign the pull request to the appropriate reviewer(s).
6. Once the pull request is approved, it will be merged into the `develop` branch.

By following the Gitflow workflow and these pull request guidelines, we can ensure a smooth and organized development process for this project.

<img src="https://wac-cdn.atlassian.com/dam/jcr:cc0b526e-adb7-4d45-874e-9bcea9898b4a/04%20Hotfix%20branches.svg?cdnVersion=1472">

### Resources to read

- Checkout [this](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) article on gitflow
