import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import Ticker from 'react-ticker'

export default function VideoFooter({channel, description, song }) {
  return (
    <div className='VideoFooter'>
      <div className='VideoFooter__text'>
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className='VideoFooter__ticker'>
          <MusicNoteIcon className='VideoFooter__icon' />
          <Ticker mode='smooth'>
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img className='VideoFooter__record' src='/public/logo192.png' />
    </div>
  )
}
