import { ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';

export const SidebarItem = ({ item, open, handleOpen, padding }) => {
	return (
		<Link href='#'>
			<ListItemButton
				onClick={handleOpen}
				style={{ paddingLeft: `${item?.main ? 16 : 28}px` }}
			>
				<ListItemText
					primary={item.label}
					primaryTypographyProps={{
						style: { fontSize: '14px', paddingLeft: padding },
					}}
				/>
				{item?.sub ? <>{open ? <span>-</span> : <span>+</span>}</> : null}
			</ListItemButton>
		</Link>
	);
};
