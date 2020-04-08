import React from 'react'
import TableItem from './TableItem'
import { useTableItemProps } from '../../modules/core/hooks'

export default function({ id }: { id: string }) {
  return <TableItem {...useTableItemProps(id)} />
}
