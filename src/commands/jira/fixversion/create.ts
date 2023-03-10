/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import * as os from 'os';
import {flags, SfdxCommand} from '@salesforce/command';
import {Messages} from '@salesforce/core';
import {AnyJson} from '@salesforce/ts-types';
import { env } from 'node:process';

const JiraApi = require('jira-client');

// Initialize Messages with the current plugin directory
Messages.importMessagesDirectory(__dirname);

// Load the specific messages for this file. Messages from @salesforce/command, @salesforce/core,
// or any library that is using the messages framework can also be loaded this way.
const messages = Messages.loadMessages('sfdx-jira-plugin', 'fix-version-create');

interface JiraConfig {
  protocol: string;
  host: string;
  username: string;
  password: string;
  apiVersion: string;
  strictSSL: boolean
}

export default class Create extends SfdxCommand {
  public static description = messages.getMessage('commandDescription');

  public static examples = messages.getMessage('examples').split(os.EOL);

  public static args = [{name: 'file'}];

  protected static flagsConfig = {
    name: flags.string({
      char: 'n',
      required: true,
      description: messages.getMessage('nameFlagDescription'),
    }),
    description: flags.string({
      char: 'd',
      description: messages.getMessage('nameFlagDescription'),
    }),
    projectid: flags.string({
      char: 'p',
      required: true,
      description: messages.getMessage('projectIdFlagDescription'),
    }),
    protocol: flags.string({
      char: 'p',
      default: "https",
      description: messages.getMessage('nameFlagDescription'),
    }),
    jiraapiversion: flags.string({
      char: 'r',
      default: "2",
      description: messages.getMessage('nameFlagDescription'),
    }),
    strictssl: flags.boolean({
      char: 's',
      default: true,
      description: messages.getMessage('nameFlagDescription'),
    }),
  };

  // Comment this out if your command does not require an org username
  protected static requiresUsername = false;

  // Comment this out if your command does not support a hub org username
  protected static supportsDevhubUsername = false;

  // Set this to true if your command requires a project workspace; 'requiresProject' is false by default
  protected static requiresProject = false;

  public async run(): Promise<AnyJson> {

    const config: JiraConfig = {
      protocol: this.flags.protocol,
      host: env.JIRA_HOST,
      username: env.JIRA_USER_NAME,
      password: env.JIRA_PASSWORD,
      apiVersion: this.flags.jiraapiversion,
      strictSSL: this.flags.strictssl
    } as JiraConfig;

    const jiraApi = new JiraApi(config);

    let jiraFixVersion = null;
    await jiraApi.createVersion({
      description: this.flags.description,
      name: this.flags.name,
      archived: false,
      released: false,
      project: this.flags.projectid,
    }).then((issue) => {
      jiraFixVersion = issue;
    });

    return jiraFixVersion;
  }
}
