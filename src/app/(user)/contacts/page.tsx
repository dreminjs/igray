import { ContactsPanel } from '@/components/user/common/contacts/ContactsPanel'
import { NewsList } from '@/components/user/common/news/NewsList'
import { Breadcrumbs } from '@/components/user/ui/Breadcrumbs'
import { Container } from '@/components/user/ui/Container'

import { publicUrl } from '@/config/page-routes/public'

import { news } from '@/constants/news'

export default function ContactsPage() {
	const breadcrumbs = [
		{ label: 'Главная', href: publicUrl.home() },
		{ label: 'Контакты', href: '' }
	]

	return (
		<Container>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<ContactsPanel />
			<NewsList items={news} />
		</Container>
	)
}
