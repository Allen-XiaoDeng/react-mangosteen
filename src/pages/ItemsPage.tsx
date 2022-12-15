import styled from 'styled-components'
import { useState } from 'react'
import { AddItemFloatButton } from '../components/AddItemFloatButton'
import { TimeRangePicker } from '../components/TimeRangePicker'
import { TopNav } from '../components/TopNav'
import { TopMenu } from '../components/TopMenu'
import { menuContext } from '../contexts/menuContext'
import type { TimeRange } from '../components/TimeRangePicker'
import { ItemsList } from './ItemsPage/ItemsList'
import { ItemsSummary } from './ItemsPage/ItemsSummary'
const Div = styled.div`
  background: linear-gradient(0deg, rgba(143,76,215,1) 0%, rgba(92,51,190,1) 100%);
`

export const ItemsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('thisMonth')
  const [visible, setVisible] = useState(false)
  const [items] = useState<Item[]>([
    {
      id: 1,
      kind: 'incomes',
      amount: 1000,
      user_id: 1,
      tag_ids: [1],
      happen_at: '2021-01-01T00:00:00.000Z',
      created_at: '2021-01-01T00:00:00.000Z',
      updated_at: '2021-01-01T00:00:00.000Z',
    }, {
      id: 2,
      kind: 'incomes',
      amount: 1000,
      user_id: 1,
      tag_ids: [1],
      happen_at: '2021-01-01T00:00:00.000Z',
      created_at: '2021-01-01T00:00:00.000Z',
      updated_at: '2021-01-01T00:00:00.000Z',
    }
  ])
  return (
    <div>
      <menuContext.Provider value={{ setVisible }}>
        <Div>
          <TopNav />
          <TimeRangePicker selected={timeRange} onSelected={setTimeRange} />
        </Div>
        <ItemsSummary />
        <ItemsList items={items} />
        <AddItemFloatButton />
        {visible ? <TopMenu /> : null}
      </menuContext.Provider>
    </div>
  )
}
