import MainNavigation from '../MainNavigation/MainNavigation';
import classes from './Layout.module.css'

export default function Layout(props) {
  return (
    <div className={classes.main}>
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  );
}

