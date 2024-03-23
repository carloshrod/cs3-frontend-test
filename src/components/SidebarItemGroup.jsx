import { useState } from 'react';
import { Collapse } from '@mui/material';
import { SidebarItem } from './SidebarItem';

export const SidebarItemGroup = ({ item }) => {
	const [openCollapseItems, setOpenCollapseItems] = useState({});

	const handleOpen = id => {
		setOpenCollapseItems(prevState => ({
			...prevState,
			[id]: !prevState[id],
		}));
	};

	const renderSubItems = (subItems, depth = 0) => {
		return subItems.map((subItem, index) => (
			<div key={subItem.id}>
				<SidebarItem
					item={subItem}
					open={openCollapseItems[subItem.id] || false}
					handleOpen={() => handleOpen(subItem.id)}
					depth={depth * 25}
					index={index}
				/>
				{subItem?.children_categories && (
					<Collapse
						in={openCollapseItems[subItem.id] || false}
						timeout='auto'
						unmountOnExit
					>
						{renderSubItems(subItem?.children_categories, depth + 1)}
					</Collapse>
				)}
			</div>
		));
	};

	return (
		<>
			<SidebarItem
				item={item}
				open={openCollapseItems[item.id] || false}
				handleOpen={() => handleOpen(item.id)}
			/>
			<Collapse
				in={openCollapseItems[item.id] || false}
				timeout='auto'
				unmountOnExit
			>
				{item?.children_categories && renderSubItems(item?.children_categories)}
			</Collapse>{' '}
		</>
	);
};
