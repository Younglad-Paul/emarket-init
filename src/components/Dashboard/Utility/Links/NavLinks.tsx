import { Home, LocateFixed, School, Scroll, User, UserRoundCheck } from "lucide-react";

export const FieldNav = [
    {
      name: 'Dashboard',
      icon: <Home />,
      link: '/dashboard',
    },
    {
      name: 'Form',
      icon: <Scroll />,
      link: '/dashboard/form',
    },
    {
        name: 'Markets',
        icon: <School />,
        link: '/dashboard/market', 
      },
    {
      name: 'Owners',
      icon: <UserRoundCheck />,
      link: '/dashboard/registered-users', 
    },
    {
      name: 'Store',
      icon: <LocateFixed />,
      link: '/dashboard/store', 
    },
    {
      name: 'Profile',
      icon: <User />,
      link: '/dashboard/profile',
    },
  ];
  