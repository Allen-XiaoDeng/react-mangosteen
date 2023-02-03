import { useState } from 'react'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import { Tabs } from '../components/Tabs'
import { TopNav } from '../components/TopNav'

type ItemKind = 'income' | 'expense'
export const ItemsNewPage: React.FC = () => {
  const tabItems: { key: ItemKind; text: string }[]
    = [{ key: 'income', text: '支出' }, { key: 'expense', text: '收入' }]
  const [tabItem, setTabItem] = useState<ItemKind>('income')

  return (
    <div>
      <Gradient>
        <TopNav title="记一笔" icon={<Icon name="back" />} />
        <Tabs tabItems={tabItems}
          className="children-flex-1 text-center"
          value={tabItem} onChange={(item) => { setTabItem(item) }}
        />
      </Gradient>
    </div>
  )
}
