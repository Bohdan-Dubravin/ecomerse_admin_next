import Layout from "@/components/layouts/Layout";
type Props = {
  children: React.ReactNode;
};
const MainProvider = ({ children }: Props) => {
  return (
    // <HeadProvider>
    // 	<Provider store={store}>
    // 		<QueryClientProvider client={queryClient}>
    // 			<ReduxToast />
    // 			<AuthProvider Component={{ isOnlyAdmin, isOnlyUser }}>
    <Layout>{children}</Layout>
    // 			</AuthProvider>
    // 		</QueryClientProvider>
    // 	</Provider>
    // </HeadProvider>
  );
};
export default MainProvider;
