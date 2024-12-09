'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/production'
import { FC, PropsWithChildren, useState } from 'react'
import { Toaster } from 'react-hot-toast'

import { UnavailableServiceModal } from '@/components/user/common/modals/UnavailableServiceModal'

const Providers: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [client] = useState(new QueryClient())

	// {
	// 	defaultOptions: {
	// 		queries: {
	// 			refetchOnWindowFocus: false,
	// 		},
	// 	},
	// }

	return (
		<QueryClientProvider client={client}>
			<Toaster
				position='top-center'
				toastOptions={{
					duration: 2000,
					style: {
						background: '#333',
						color: '#fff'
					}
				}}
			/>

			{children}

			<UnavailableServiceModal />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default Providers