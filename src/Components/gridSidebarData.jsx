import HomeIcon from '@material-ui/icons/Home';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import PaymentIcon from '@material-ui/icons/Payment';

const gridData = [
    {
        title: "Home",
        icon:<HomeIcon />,
        link:'/Grid'
    },
    {
        title: "Verify Customers",
        icon:<VerifiedUserIcon />,
        link:'/GridVerifyCustomer'
    },
    {
        title: "Check Payments",
        icon:<AssignmentTurnedInIcon />,
        link:'/GridCheckPayment'
    },
    {
        title: "Make Payment",
        icon:<PaymentIcon />,
        link:'/GridMakePayment'
    },
    {
        title: "Logout",
        icon:<ExitToAppIcon />,
        link:'/'
    }
];

export default gridData;