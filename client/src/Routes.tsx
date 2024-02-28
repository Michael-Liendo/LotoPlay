import { IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router';
import Tab1 from './pages/Tab1';

export enum PublicRoutesEnum {
  Home = '/home',
}

export enum AuthRoutesEnum {
  Login = '/login',
  SignUp = '/signup',
  Welcome = '/welcome',
}

export enum PrivateRoutesEnum {}

export function Routes() {
  return (
    <IonRouterOutlet id="main">
      {/* {user ? PrivateRoutes.map((route) => route) : AuthRoutes.map((route) => route)} */}
      {PublicRoutes.map((route) => route)}
    </IonRouterOutlet>
  );
}

const PrivateRoutes: JSX.Element[] = [];

const AuthRoutes: JSX.Element[] = [];

const PublicRoutes = [
  <Route path={PublicRoutesEnum.Home} component={Tab1} exact />,
];
