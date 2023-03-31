import { Link } from 'react-router-dom'
import p from '../assets/images/welcome1.svg'
export const Welcome1: React.FC = () => {
  return (
    <div text-center>
      <img src={p} w-256px h-256px/>
      <h2 text-32px mt-48px >
        会挣钱 <br />
        还会省钱
      </h2>
      <div mt-64px>
        <Link text-32px color="#8fe2de" font-bold to="/welcome/2">下一页</Link>
      </div>
    </div>
  )
}
