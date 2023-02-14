import { useState } from 'react'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import type { TimeRange } from '../components/TimeRangePicker'
import { TimeRangePicker } from '../components/TimeRangePicker'
import { TopNav } from '../components/TopNav'
import { LineChart } from '../components/LineChart'
import { PieChart } from '../components/PieChart'
import { RankChart } from '../components/RankChart'
import { Input } from '../components/Input'

export const StatisticsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('thisMonth')
  const items = [
    { date: '2000-01-01', value: 15000 },
    { date: '2000-01-02', value: 25000 },
    { date: '2000-01-03', value: 30000 },
    { date: '2000-01-04', value: 40000 },
    { date: '2000-01-05', value: 50000 },
    { date: '2000-01-06', value: 60000 },
    { date: '2000-01-07', value: 70000 },
    { date: '2000-01-08', value: 80000 },
    { date: '2000-01-09', value: 90000 },
    { date: '2000-01-10', value: 100000 },
    { date: '2000-01-11', value: 110000 },
    { date: '2000-01-12', value: 120000 },
    { date: '2000-01-13', value: 130000 },
    { date: '2000-01-14', value: 140000 },
    { date: '2000-01-15', value: 150000 },
    { date: '2000-01-16', value: 160000 },
    { date: '2000-01-17', value: 170000 },
    { date: '2000-01-18', value: 180000 },
    { date: '2000-01-19', value: 190000 },
    { date: '2000-01-20', value: 200000 },
    { date: '2000-01-31', value: 10000 },
  ].map(item => ({ x: item.date, y: item.value / 100 }))
  const items2 = [
    { tag: { name: '吃饭', sign: '😨' }, amount: 10000 },
    { tag: { name: '打车', sign: '🥱' }, amount: 20000 },
    { tag: { name: '买皮肤', sign: '💖' }, amount: 68800 },
  ].map(item => ({ x: item.tag.name, y: item.amount / 100 }))
  const items3 = [
    { tag: { name: '吃饭', sign: '😨' }, amount: 10000 },
    { tag: { name: '打车', sign: '🥱' }, amount: 20000 },
    { tag: { name: '买皮肤', sign: '💖' }, amount: 68800 },
  ].map(item => ({ name: item.tag.name, value: item.amount, sign: item.tag.sign }))
  const [x, setX] = useState('expenses')
  return (
    <div>
      <Gradient>
        <TopNav title="统计图表" icon={
          <Icon name="back" />
        } />
      </Gradient>
      <TimeRangePicker selected={timeRange} onSelect={setTimeRange} />
      <div flex p-16px items-center gap-x-16px>
        <span grow-0 shrink-0>类型</span>
        <div grow-1 shrink-1>
          <Input type="select" options={[
            { text: '支出', value: 'expenses' },
            { text: '收入', value: 'income' },
          ]} value={x} onChange={value => setX(value)} disableError/>
        </div>
      </div>
      <LineChart className="h-120px" items={items} />
      <PieChart className="h-260px m-t-16px" items={items2} />
      <RankChart className="m-t-8px" items={items3} />    </div>
  )
}
