import PropTypes from 'prop-types'
import CommandsContainer from '../SidebarCommands/CommandsContainer'

/**
 * @param {Function} setShowMenu
 */
export default function MenuMobile({ setTheme, setShowMenu }) {
  return (
    <section className='MenuMobile'>
      {/* Here we pass the props so that when clicking on the menu the menu is removed */}
      <CommandsContainer setTheme={setTheme} setShowMenu={setShowMenu} />
    </section>
  )
}

MenuMobile.propTypes = {
  setShowMenu: PropTypes.func.isRequired,
  setTheme: PropTypes.func.isRequired
}
