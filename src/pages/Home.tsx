import useSWR from 'swr'
import axios from 'axios'
const fetcher = (path: string) => {
  return axios.get(path).then(res => res.data)
}

export const Home: React.FC = () => {
  const { data, error, isValidating, mutate } = useSWR('/api/xxx', fetcher)
  const isLoading = !data && !error
  const onClick = async () => {
    const data = await axios.post('xxx')
    mutate(data)
  }
  if (error)
    return <div>failed to load</div>
  if (isLoading)
    return <div>loading</div>
  if (isValidating)
    return <div>正在获取最新值</div>

  return (
    <div>{data?.data.message}</div>
  )
}
