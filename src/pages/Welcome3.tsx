import { NavLink } from 'react-router-dom'

export const Welcome3: React.FC = () => {
  return (
    <>
      <div
        style={{ border: '1px solid red' }}
      > 3 <NavLink to="/welcome/4">下一页</NavLink> </div>
      <div flex justify-center items-center
        after="content-[hi] b-1 b-red"
        before="content-[hi] b-1 b-red"
      >
        <header hover:bg-red w-100px b-1 b-red h-40px></header>
        <main grow-1 b-1 b-blue h-100px></main>
        <footer w-200px b-1 b-amber h-50px></footer>
      </div>
    </>
  )
}
