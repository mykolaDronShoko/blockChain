import Loadable from "react-loadable";
import Loader from "./components/LayoutComponents/Loader/index";

export const ControlPanel = Loadable({
  loader: () => import("components/ControlPanelPages/index"),
  loading: Loader
});
export const PublicPanel = Loadable({
  loader: () => import("components/PublicPages/index"),
  loading: Loader
});
