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
    darkIcon: <Home strokeWidth={2.5} />,
    route: "/",
    lable: "Home",
    darkLable: "font-semibold",
  },
  {
    icon: <Search />,
    darkIcon: <Search strokeWidth={2.5} />,
    route: "/Search",
    lable: "Search",
    darkLable: "font-semibold",
  },
  {
    icon: <Activity />,
    darkIcon: <Activity strokeWidth={2.5} />,
    route: "/activity",
    lable: "Activity",
    darkLable: "font-semibold",
  },

  {
    icon: <ImagePlus />,
    darkIcon: <ImagePlus strokeWidth={2.5} />,
    route: "/create",
    lable: "Create",
    darkLable: "font-semibold",
  },
  {
    icon: <Group />,
    darkIcon: <Group strokeWidth={2.5} />,
    route: "/communities",
    lable: "Communities",
    darkLable: "font-semibold",
  },
  {
    icon: <Settings />,
    darkIcon: <Settings strokeWidth={2.5} />,
    route: "/settings",
    lable: "Settings",
    darkLable: "font-semibold",
  },
];
