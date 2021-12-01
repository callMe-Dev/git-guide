import ListCommands from './ListCommands/ListCommands'
import CommandsContainer from './CommandsContainer'

export default function CommandsContainerRoute() {
  return (
    <>
      <div className='Layout__noView'>
        <CommandsContainer />
      </div>
      <ListCommands />
    </>
  )
}
