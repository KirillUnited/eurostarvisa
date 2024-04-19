'use client'
import { FacebookIcon, InstagramIcon } from 'lucide-react'
import React from 'react'
import VkontakteIcon from '@/assets/svg/vk.svg'
import styled from 'styled-components'
import Link from 'next/link'
import { cn } from '@/lib/utils'

function Socials({ className }: React.HTMLAttributes<HTMLElement>) {
	return (
		<div className={cn(
			'flex justify-center items-center flex-col',
			className
		)}>
			<List>
				<ListItem>
					<ListLink href={`https://www.instagram.com/`} target='_blank'>
						<FacebookIcon />
					</ListLink>
				</ListItem>
				<ListItem>
					<ListLink href={`https://www.instagram.com/`} target='_blank'>
						<VkontakteIcon />
					</ListLink>
				</ListItem>
				<ListItem>
					<ListLink href={`https://www.instagram.com/`} target='_blank'>
						<InstagramIcon />
					</ListLink>
				</ListItem>
			</List>
		</div>
	)
}

const List = styled.ul`
	display: inline-flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 0.5rem;
`;
const ListItem = styled.li`
`;
const ListLink = styled(Link)`
	--icon-size: 20px;

	display: grid;
	place-items: center;
	background-color: hsl(var(--primary));
	color: hsl(var(--primary-foreground));
	border-radius: 999px;
	padding: 6px;
	&>svg {
		color: inherit;
		width: var(--icon-size);
		height: var(--icon-size);
	}
`

export default Socials