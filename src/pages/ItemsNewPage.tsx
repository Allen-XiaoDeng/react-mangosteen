import type { ReactNode } from 'react'
import { useState } from 'react'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import { Tabs } from '../components/Tabs'
import { TopNav } from '../components/TopNav'
import { useCreateItemStore } from '../stores/useCreateItemStore'
import { hasError, validate } from '../lib/validate'
import { useAjax } from '../lib/ajax'
import { ItemAmount } from './ItemsNewPage/ItemAmount'
import { Tags } from './ItemsNewPage/Tags'
import s from './ItemsNewPage.module.scss'
import { ItemDate } from './ItemsNewPage/ItemDate'

export const ItemsNewPage: React.FC = () => {
  const { data, setData, setError } = useCreateItemStore()
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
    ] // React DOM diff 优化
  const { post } = useAjax({ showLoading: true, handleError: true })
  const onSubmit = async () => {
    const error = validate(data, [
      { key: 'kind', type: 'required', message: '请选择类型：收入或支出' },
      { key: 'tag_ids', type: 'required', message: '请选择一个标签' },
      { key: 'happen_at', type: 'required', message: '请选择一个时间' },
      { key: 'amount', type: 'required', message: '请输入金额' },
      { key: 'amount', type: 'notEqual', value: 0, message: '金额不能为0' },
    ])
    setError(error)
    if (hasError(error)) {
      const message = Object.values(error).flat().join('\n')
      window.alert(message)
    } else {
      const response = await post<Resource<Item>>('/api/v1/items', data)
      console.log(response.data.resource)
    } const onSubmit = () => {
      console.log('你要提交是吧')
    }
  }

  return (
    <div className={s.wrapper} h-screen flex flex-col onSubmit={onSubmit}>
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
      {/* <div text-28px>{JSON.stringify(data)}</div> */}
      <ItemAmount className="grow-0 shrink-0" itemDate={
        <ItemDate value={data.happen_at} onChange={(happen_at) => setData({ happen_at })} />
      } value={data.amount} onChange={amount => setData({ amount })}
        onSubmit={onSubmit}
      />
    </div>
  )
}
