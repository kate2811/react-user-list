import React from 'react'
import Header from '../Header'
import cx from 'classnames'

type Props = {
  children: React.ReactNode
  title: string
}
const PageLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <div>
      <Header />
      <div className={cx('container', 'mt-4')}>
        <h1 className='mb-3'>{title}</h1>
        {children}
      </div>
    </div>
  )
}

export default PageLayout
