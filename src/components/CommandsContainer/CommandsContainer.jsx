import React from 'react'
import { Link } from 'react-router-dom'
import CommandName from './CommandName/CommandName'
import { commands } from '../../docs/command'

function CommandsContainer() {
  /**
   * @file gitCommand {
   *   @param {string} name
   *   @param {string} gitCmd
   *   @param {string} description
   * }
   */
  const gitCommandsData = commands.map((gitCommand) => {
    return <CommandName extCmdName={gitCommand.gitCmd} key={gitCommand.name} />
  })

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className='CommandContainer'>
      <Link
        className='CommandContainer__title'
        to='/commands'
        onClick={scrollToTop}>
        Comandos
      </Link>
      {/* Buttons for git commands */}
      {gitCommandsData}
    </div>
  )
}

export default CommandsContainer
