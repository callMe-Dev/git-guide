import { commands } from '../command'

export default function MarkdownContent() {
  return (
    <div className='MarkdownContent'>
      {commands.map(({ name, content, id }, i) => (
        <div className='MarkdownContent__content' key={i}>
          <h1 id={id}>{name}</h1>
          {content}
        </div>
      ))}
    </div>
  )
}
