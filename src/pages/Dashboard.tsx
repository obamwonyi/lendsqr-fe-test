import { useMediaQuery } from '../hooks/useMediaQuery';
import { BREAKPOINTS } from '../constants/breakpoints';
import DashboardDesktop from './Screens/DashboardDesktop';
import DashboardMobile from './Screens/DashboardMobile';

export default function Dashboard() 
{
    const isMobile = useMediaQuery(BREAKPOINTS.mobile);
    return isMobile ? <DashboardMobile /> : <DashboardDesktop />;

}