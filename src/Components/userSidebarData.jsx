import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import UpdateIcon from '@material-ui/icons/Update';
import PaymentIcon from '@material-ui/icons/Payment';

const data = [
    {
        title: "Home",
        icon:<HomeIcon />,
        link:'/User'
    },
    {
        title: "Update reading",
        icon:<UpdateIcon />,
        link:'/UserUpdateReading'
    },
    {
        title: "Pay Bill",
        icon:<PaymentIcon />,
        link:'/UserPaybill'
    },
    {
        title: "Profile",
        icon:<PersonIcon />,
        link:'/UserProfile'
    },
    {
        title: "Logout",
        icon:<ExitToAppIcon />,
        link:'/'
    }
];

export default data;