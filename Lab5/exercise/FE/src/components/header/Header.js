import './Header.css'


import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum'

export default function Header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize='large' className='header-icon' />
      </IconButton>
      <img className='header-logo' width='50px' src='logo192.png' alt='header-logo'/>
      <IconButton>
        <ForumIcon fontSize='large' className='header-icon' />
      </IconButton>
    </div>
  )
}
