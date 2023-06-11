import Layout from '@/components/layouts/Layout';
import { QueryClient, QueryClientProvider } from 'react-query';
type Props = {
  children: React.ReactNode;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const MainProvider = ({ children }: Props) => {
  return (
    // <HeadProvider>
    // 	<Provider store={store}>
    <QueryClientProvider client={queryClient}>
      {/* <ReduxToast /> */}

      {/* <AuthProvider Component={{ isOnlyAdmin, isOnlyUser }}> */}
      <Layout>{children}</Layout>

      {/* </AuthProvider> */}
    </QueryClientProvider>
    // 	</Provider>
    // </HeadProvider>
  );
};
export default MainProvider;
