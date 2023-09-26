import {
  Activity,
  Group,
  Home,
  ImagePlus,
  Search,
  Settings,
  Users,
} from "lucide-react";

export const LinkData = [
  {
    icon: <Home />,
    route: "/",
    lable: "Home",
  },
  {
    icon: <Search />,
    route: "/Search",
    lable: "Search",
  },
  {
    icon: <Activity />,
    route: "/activity",
    lable: "Activity",
  },

  {
    icon: <ImagePlus />,
    route: "/create",
    lable: "Create",
  },
  {
    icon: <Group />,
    route: "/communities",
    lable: "Communities",
  },
  {
    icon: <Settings />,
    route: "/settings",
    lable: "Settings",
  },
];
