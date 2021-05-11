import { git_init } from './gitCommands/git-init'
import { git_clone } from './gitCommands/git-clone'
import { git_add } from './gitCommands/git-add'
import { git_commit } from './gitCommands/git-commit'
import { git_status } from './gitCommands/git-status'

/**
 * @param {string} name
 * @param {string} id
 * @param {string} gitCmd
 * @param {String} content
 * {
      name: '',
      id: '',
      gitCmd: '',
      content: ''
    }
 */
export const commands = [
  {
    name: 'git init',
    id: 'git-init',
    gitCmd: 'init',
    content: git_init
  },
  {
    name: 'git clone',
    id: 'git-clone',
    gitCmd: 'clone',
    content: git_clone
  },
  {
    name: 'git add',
    id: 'git-add',
    gitCmd: 'add',
    content: git_add
  },
  {
    name: 'git commit',
    id: 'git-commit',
    gitCmd: 'commit',
    content: git_commit
  },
  {
    name: 'git status',
    id: 'git-status',
    gitCmd: 'status',
    content: git_status
  }
]
