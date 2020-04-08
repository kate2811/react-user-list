import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  breadcrumbs?: { title: string; to?: string }[]
}

const Breadcrumbs: React.FC<Props> = ({ breadcrumbs }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to={'/'}>Home</Link>
        </li>
        {breadcrumbs &&
          breadcrumbs.map((item, index) => (
            <li key={index} className="breadcrumb-item active" aria-current="page" data-testid={'path item'}>
              {item.to ? <Link to={item.to}>{item.title}</Link> : item.title}
            </li>
          ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
