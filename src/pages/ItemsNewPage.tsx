import type { ReactNode } from 'react'
import { useState } from 'react'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import { Tabs } from '../components/Tabs'
import { TopNav } from '../components/TopNav'
import { useCreateItemStore } from '../stores/useCreateItemStore'
import { DateAndAmount } from './ItemsNewPage/DateAndAmount'
import { Tags } from './ItemsNewPage/Tags'
import s from './ItemsNewPage.module.scss'

export const ItemsNewPage: React.FC = () => {
  const { data, error, setData, setError } = useCreateItemStore()
  const tabItems: { key: Item['kind']; text: string; element?: ReactNode }[]
    = [
      {
        key: 'expenses', text: '支出', element:
          <Tags kind="expenses" value={data.tag_ids} onChange={(ids) => setData({ tag_ids: ids })} />
      },
      {
        key: 'income', text: '收入', element:
          <Tags kind="income" value={data.tag_ids} onChange={(ids) => setData({ tag_ids: ids })} />
      }

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
        value={data.kind!}
        onChange={(item) => { setData({ kind: item }) }}
      />
      <div text-28px>{JSON.stringify(data)}</div>
      <DateAndAmount className="grow-0 shrink-0" />
    </div>
  )
}
