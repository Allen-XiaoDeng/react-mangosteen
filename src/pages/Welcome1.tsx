import p from '../assets/images/welcome1.svg'
export const Welcome1: React.FC = () => {
  return (
    <div text-center>
      <img src={p} w-128px h-130px/>
      <h2 text-32px mt-48px >
        会挣钱 <br />
        还要会省钱
      </h2>
    </div>
  )
}
