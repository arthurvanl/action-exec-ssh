# action-exec-ssh

With this action you can simply execute ssh commands to your vps.

This gives us the opportunity to deploy the application right away.
You should create 2 [secrets](https://github.com/Azure/actions-workflow-samples/blob/master/assets/create-secrets-for-GitHub-workflows.md) for `host` & `password`.

### Workflow example

```yaml
name: Execute SSH Commands

on: [push, pull_request, workflow_dispatch]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: Run SSH Commands
      id: ssh
      uses: arthurvanl/action-exec-ssh@v1
      with:
        host: ${{ secrets.HOST }}
        username: root
        password: ${{ secrets.PASSWORD }}
        ssh_1: '<SSH_COMMAND>'
        ssh_2: '<SSH_COMMAND>'
        ssh_3: '<SSH_COMMAND>'
        ssh_4: '<SSH_COMMAND>'

```
