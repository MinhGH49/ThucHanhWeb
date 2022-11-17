import '/VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import Ticker from 'react-ticker'

export default function VideoFooter({channel, desc, song }) {
  return (
    <div className='VideoFooter'>
      <div className='VideoFooter-text'>
        <h3>@{channel}</h3>
        <p>{desc}</p>
        <div className='VideoFooter-ticker'>
          <MusicNoteIcon className='VideoFooter-icon' />
          <Ticker mode='smooth'>
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img className='VideoFooter-record' src='' />
    </div>
  )
}
