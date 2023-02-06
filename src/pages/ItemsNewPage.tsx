import type { ReactNode } from 'react'
import { useState } from 'react'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import { Tabs } from '../components/Tabs'
import { TopNav } from '../components/TopNav'

type ItemKind = 'income' | 'expense'
export const ItemsNewPage: React.FC = () => {
  const tabItems: { key: ItemKind; text: string; element?: ReactNode }[]
    = [
      { key: 'expense', text: '支出', element: <div>支出</div> },
      { key: 'income', text: '收入', element: <div>收入</div> }
    ]
  const [tabItem, setTabItem] = useState<ItemKind>('income')

  return (
    <div>
      <Gradient>
        <TopNav title="记一笔" icon={<Icon name="back" />} />
        </Gradient>
        <Tabs
          classPrefix='itemsNewPage'
          tabItems={tabItems}
          className="text-center"
          value={tabItem} onChange={(item) => { setTabItem(item) }}
        />
    </div>
  )
}
