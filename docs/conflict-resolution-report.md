# \# Conflict Resolution Report

# 

# \## 1) Conflict Scenario

# 

# The merge conflict occurred in the `README.md` file when merging multiple feature branches into the `main` branch. The branches involved were `feature/user-authentication` and `feature/api-endpoints`. Both branches modified the same section of the README file but for different purposes. The `feature/user-authentication` branch updated the documentation to describe improvements made to the login form, such as input validation, inline error messages, and disabling the submit button until inputs were valid. At the same time, the `feature/api-endpoints` branch edited the same lines to document newly added REST API functionality. Because both branches changed the same lines in different ways, Git was unable to automatically merge the file and reported a conflict.

# 

# \## 2) What You Saw

# 

# During the merge attempt, Git displayed a merge conflict and inserted conflict markers directly into the `README.md` file. The file contained the standard markers `<<<<<<< HEAD`, `=======`, and `>>>>>>> feature-api-endpoints`. The content between `<<<<<<< HEAD` and `=======` represented the changes from the current branch, while the content between `=======` and `>>>>>>>` represented the changes from the incoming branch. These markers clearly showed where Git could not decide which version to keep. A screenshot was captured showing these conflict markers in the file before any manual resolution was performed.

# 

# \## 3) Resolution Strategy

# 

# The conflict was resolved manually by reviewing both versions of the documentation and combining the relevant information. Instead of removing one version entirely, useful content from both branches was kept so that the final README reflected both the authentication improvements and the API changes. All conflict markers were removed after the content was merged into a single, clear section. This approach was chosen to avoid losing important documentation. After resolving the conflict, the file was staged and committed with a clear merge resolution commit message. The application was then run using `node api.js` to verify that it still worked correctly after the merge.

# 

# \## 4) Prevention Methods

# 

# In a real development team, merge conflicts like this can be reduced by following several best practices. Keeping pull requests small and focused limits overlapping changes. Communicating with teammates before making major documentation or refactoring changes helps avoid editing the same lines simultaneously. Regularly merging or rebasing feature branches from `main` keeps branches up to date. Additionally, splitting documentation into smaller files can reduce conflicts when multiple developers are working in parallel.

# 

