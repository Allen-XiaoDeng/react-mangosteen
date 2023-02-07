import type { ReactNode } from 'react'
import { useState } from 'react'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import { Tabs } from '../components/Tabs'
import { TopNav } from '../components/TopNav'
import { DateAndAmount } from './ItemsNewPage/DateAndAmount'
import { Tags } from './ItemsNewPage/Tags'
import s from './ItemsNewPage.module.scss'

export const ItemsNewPage: React.FC = () => {
  const tabItems: { key: Item['kind']; text: string; element?: ReactNode }[]
    = [
      { key: 'expenses', text: '支出', element: <Tags kind="expenses" /> },
      { key: 'income', text: '收入', element: <Tags kind="income" /> }
    ]
  const [tabItem, setTabItem] = useState<Item['kind']>('income')

  return (
    <div className={s.wrapper} h-screen flex flex-col>
      <Gradient className="grow-0 shrink-0">
        <TopNav title="记一笔" icon={<Icon name="back" />} />
      </Gradient>
      <Tabs
        classPrefix='itemsNewPage'
        tabItems={tabItems}
        className="text-center grow-1 shrink-1 overflow-hidden"
        value={tabItem} onChange={(item) => { setTabItem(item) }}
      />
      <DateAndAmount className="grow-0 shrink-0" />
    </div>
  )
}
