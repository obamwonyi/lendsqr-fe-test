import { useMediaQuery } from '../hooks/useMediaQuery';
import { BREAKPOINTS } from '../constants/breakpoints';
import LoginDesktop from './Screens/LoginDesktop';
import LoginMobile from './Screens/LoginMobile';


export default function Login()
{

    const isMobile = useMediaQuery(BREAKPOINTS.mobile);
    return isMobile ? <LoginMobile /> : <LoginDesktop />;

}
