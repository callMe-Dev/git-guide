import PropTypes from 'prop-types'

export default function CommandName({ extCmdName, url }) {
  return (
    <div className='CommandContainer__command'>
      <a
        className='CommandContainer__command__name'
        href={`/commands/#${url}`}
      >
        <i className='fas fa-hashtag'></i>
        <span>git</span> {extCmdName}
      </a>
    </div>
  )
}

CommandName.propTypes = {
  extCmdName: PropTypes.string.isRequired
}
