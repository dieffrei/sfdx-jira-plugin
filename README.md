sfdx-jira-plugin
================



[![Create](https://img.shields.io/npm/v/sfdx-jira-plugin.svg)](https://npmjs.org/package/sfdx-jira-plugin)
[![CircleCI](https://circleci.com/gh/workspace/sfdx-jira-plugin/tree/master.svg?style=shield)](https://circleci.com/gh/workspace/sfdx-jira-plugin/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/workspace/sfdx-jira-plugin?branch=master&svg=true)](https://ci.appveyor.com/project/heroku/sfdx-jira-plugin/branch/master)
[![Greenkeeper](https://badges.greenkeeper.io/workspace/sfdx-jira-plugin.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/workspace/sfdx-jira-plugin/badge.svg)](https://snyk.io/test/github/workspace/sfdx-jira-plugin)
[![Downloads/week](https://img.shields.io/npm/dw/sfdx-jira-plugin.svg)](https://npmjs.org/package/sfdx-jira-plugin)
[![License](https://img.shields.io/npm/l/sfdx-jira-plugin.svg)](https://github.com/workspace/sfdx-jira-plugin/blob/master/package.json)

<!-- toc -->
* [Debugging your plugin](#debugging-your-plugin)
<!-- tocstop -->
<!-- install -->
<!-- usage -->
```sh-session
$ npm install -g sfdx-jira-plugin
$ sfdx COMMAND
running command...
$ sfdx (--version)
sfdx-jira-plugin/0.0.2 darwin-arm64 node-v18.11.0
$ sfdx --help [COMMAND]
USAGE
  $ sfdx COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
* [`sfdx jira:fixversion:create -h <string> -j <string> -w <string> -n <string> -p <string> [-d <string>] [-p <string>] [-r <string>] [-s] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-jirafixversioncreate--h-string--j-string--w-string--n-string--p-string--d-string--p-string--r-string--s---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx jira:fixversion:create -h <string> -j <string> -w <string> -n <string> -p <string> [-d <string>] [-p <string>] [-r <string>] [-s] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

print a greeting and your org IDs

```
USAGE
  $ sfdx jira:fixversion:create -h <string> -j <string> -w <string> -n <string> -p <string> [-d <string>] [-p <string>] [-r
    <string>] [-s] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -d, --description=<value>                                                         name to print
  -h, --host=<value>                                                                (required) name to print
  -j, --jirausername=<value>                                                        (required) name to print
  -n, --name=<value>                                                                (required) name to print
  -p, --projectid=<value>                                                           (required) name to print
  -p, --protocol=<value>                                                            [default: https] name to print
  -r, --jiraapiversion=<value>                                                      [default: 2] name to print
  -s, --strictssl                                                                   name to print
  -w, --password=<value>                                                            (required) name to print
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  print a greeting and your org IDs

EXAMPLES
  jira:fixversion:create --host expereo.atlassian.net --jirausername dieffrei.quadros@expereo.com --password YjmElfzTTnxiJC00RADm5272 --nam TestPONE --projectid ONE
```

_See code: [src/commands/jira/fixversion/create.ts](https://github.com/workspace/sfdx-jira-plugin/blob/v0.0.2/src/commands/jira/fixversion/create.ts)_
<!-- commandsstop -->
<!-- debugging-your-plugin -->
# Debugging your plugin
We recommend using the Visual Studio Code (VS Code) IDE for your plugin development. Included in the `.vscode` directory of this plugin is a `launch.json` config file, which allows you to attach a debugger to the node process when running your commands.

To debug the `hello:org` command: 
1. Start the inspector
  
If you linked your plugin to the sfdx cli, call your command with the `dev-suspend` switch: 
```sh-session
$ sfdx hello:org -u myOrg@example.com --dev-suspend
```
  
Alternatively, to call your command using the `bin/run` script, set the `NODE_OPTIONS` environment variable to `--inspect-brk` when starting the debugger:
```sh-session
$ NODE_OPTIONS=--inspect-brk bin/run hello:org -u myOrg@example.com
```

2. Set some breakpoints in your command code
3. Click on the Debug icon in the Activity Bar on the side of VS Code to open up the Debug view.
4. In the upper left hand corner of VS Code, verify that the "Attach to Remote" launch configuration has been chosen.
5. Hit the green play button to the left of the "Attach to Remote" launch configuration window. The debugger should now be suspended on the first line of the program. 
6. Hit the green play button at the top middle of VS Code (this play button will be to the right of the play button that you clicked in step #5).
<br><img src=".images/vscodeScreenshot.png" width="480" height="278"><br>
Congrats, you are debugging!
