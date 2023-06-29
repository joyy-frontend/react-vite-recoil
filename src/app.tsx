import { QueryClientProvider } from "react-query"
import { getClient } from "./queryClient"
import { ReactQueryDevtools } from 'react-query/devtools'
import Gnb from './components/gnb'

const App = () => {
  const queryClient = getClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Gnb />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
export default App