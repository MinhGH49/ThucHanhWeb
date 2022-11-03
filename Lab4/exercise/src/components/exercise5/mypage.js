import React from 'react'





const MyFeature = React.lazy(() =>
  Promise.all([
    import('./myfeature'),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log('resolved promise 2')
      }, 5000)
    })
  ]).then(([m]) => m)
)

export default function MyPage() {
  return (
    <>
      <h1>My page</h1>
      <MyFeature/>
    </>
  )
}
