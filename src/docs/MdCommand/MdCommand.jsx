import React from 'react'
import Markdown from 'react-markdown'
// Plugins
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import rehypeHighlight from 'rehype-highlight'

import { commands } from '../command'

export default function MdCommand() {
  return (
    <div className='MdCommands'>
      {commands.map(({ name, content, id }, i) => (
        <div className='MdCommands__content' key={i}>
          <h1 id={id}>{name}</h1>
          <Markdown
            components={{
              code: 'code',
              h3: 'h2',
              strong: 'strong'
            }}
            rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}>
            {content}
          </Markdown>
        </div>
      ))}
    </div>
  )
}
