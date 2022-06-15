# action-exec-ssh

With this action you can simply execute ssh commands to your vps.

This gives us the opportunity to deploy the application right away.
You should create 2 [secrets](https://github.com/Azure/actions-workflow-samples/blob/master/assets/create-secrets-for-GitHub-workflows.md) for `host` & `password`. You can create up to 4 commands. But you can also do this: `ls -h && htop`. This basically executes 2 commands.

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
        commands: 'SSH_COMMAND'

```
The `commands` keyword can have multiple commands:

```commands: |
     ls -a
     apt update
     apt upgrade
```
