import { IconButton } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '@/features/uiSlice';

const ToggleSidebar = () => {
	const { sidebarFull } = useSelector(state => state.ui);
	const dispatch = useDispatch();

	const handleSidebar = () => {
		dispatch(toggleSidebar(!sidebarFull));
	};

	return (
		<IconButton onClick={handleSidebar} sx={{ zIndex: 999 }}>
			{sidebarFull ? <MenuIcon /> : <MenuOpenIcon />}
		</IconButton>
	);
};

export default ToggleSidebar;
