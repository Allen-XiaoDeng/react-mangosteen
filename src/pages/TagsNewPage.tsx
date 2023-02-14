import { useState } from 'react'
import { emojis } from '../lib/emojis'
import { Gradient } from '../components/Gradient'
import { TopNav } from '../components/TopNav'
import { Icon } from '../components/Icon'
import { Input } from '../components/Input'
import s from './TagsNewPage.module.scss'

export const TagsNewPage: React.FC = () => {
  const [emoji, setEmoji] = useState('🫰')
  const onSubmit = () => { }
  return (
    <div>
      <Gradient className="grow-0 shrink-0">
        <TopNav title="新建标签" icon={<Icon name="back" />} />
      </Gradient>
      <form onSubmit={onSubmit} px-16px py-32px flex flex-col gap-y-8px>
        <Input label='标签名' error='标签名太长' />
        <Input type='emoji' label={<span>图标 <span text-24px>{emoji}</span></span>} value={emoji} onChange={v => setEmoji(v)} />
        <p text-center py-24px>记账时长按标签，即可进行编辑</p>
        <div>
          <button j-btn>确定</button>
        </div>
      </form>
    </div>
  )
}
