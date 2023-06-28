import { QueryClientProvider } from "react-query"
import { getClient } from "./queryClient"
import { ReactQueryDevtools } from 'react-query/devtools'

const App = () => {
  const queryClient = getClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
export default App