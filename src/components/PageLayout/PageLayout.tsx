import React from 'react'
import Header from '../Header'
import cx from 'classnames'
import Breadcrumbs from "../Breadcrumbs"

type Props = {
  children: React.ReactNode
  title: string
  breadcrumbs?: { title: string; to?: string }[]
}

const PageLayout: React.FC<Props> = ({ children, title, breadcrumbs }) => {
  return (
    <div>
      <Header />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className={cx('container', 'mt-4')}>
        <h1 className="mb-3">{title}</h1>
        {children}
      </div>
    </div>
  )
}

export default PageLayout
