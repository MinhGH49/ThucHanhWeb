import React from 'react'

import { FadeLoader} from 'react-spinners';
import MyPage from './mypage'

export default function Exercise5() {
  return (
    <React.Suspense fallback={<FadeLoader color={'lightblue'} size={150 }/>}>
      {console.log('react is Suspensing')}
      <MyPage />
    </React.Suspense>
  )
}
