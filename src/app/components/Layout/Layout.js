import AppNavigation from '../Elements/Navigation/AppNavigation/page';

import classes from './Layout.module.css'

export default function Layout(props) {
  return (
    <div className={classes.main}>
      <AppNavigation />
      <main>{props.children}</main>
    </div>
  );
}

