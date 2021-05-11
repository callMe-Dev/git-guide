import React from 'react'
import MetaHelmet from '../../../MetaHelmet/MetaHelmet'
import MdCommand from '../../../../docs/MdCommand/MdCommand'

export default function ListCommands() {
  return (
    <section className='ListCommands'>
      <MetaHelmet
        titleText='Comandos'
        description='Comandos completos de git'
      />
      <h1 className='ListCommands__title'>
        Comandos de <span>Git</span>
      </h1>
      <MdCommand />
    </section>
  )
}
