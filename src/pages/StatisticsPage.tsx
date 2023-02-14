import { useState } from 'react'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import type { TimeRange } from '../components/TimeRangePicker'
import { TimeRangePicker } from '../components/TimeRangePicker'
import { TopNav } from '../components/TopNav'
import { LineChart } from '../components/LineChart'

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
  return (
    <div>
      <Gradient>
        <TopNav title="统计图表" icon={
          <Icon name="back" />
        } />
      </Gradient>
      <TimeRangePicker selected={timeRange} onSelect={setTimeRange} />
      <LineChart className="h-120px" items={items} />
      </div>
  )
}
