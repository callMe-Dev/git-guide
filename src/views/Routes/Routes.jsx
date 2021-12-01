import { useRoutes } from 'react-router'
import ErrorPage from '../404/ErrorPage'
import Test from '../Test/Test'
import InstallWindows from '../os_views/InstallWindows/InstallWindows'
import InstallLinux from '../os_views/InstallLinux/InstallLinux'
import InstallMacOs from '../os_views/InstallMacOs/InstallMacos'
import BitBucket from '../Repositories/Bitbucket/Bitbucket'
import GitConfigView from '../GitConfigView/GitConfigView'
import ContentHome from '../ContentHome/ContentHome'
import GitHub from '../Repositories/GitHub/Github'
import GitLab from '../Repositories/GitLab/GitLab'
import Tutorials from '../Tutorials/Tutorials'
import CommandsContainerRoute from 'components/CommandsContainer/CommandsContainerRoute'

export default function Routes() {
  const routes = useRoutes([
    {
      path: '/',
      element: <ContentHome />
    },
    {
      path: '/windows',
      element: <InstallWindows />
    },
    {
      path: '/macos',
      element: <InstallMacOs />
    },
    {
      path: '/linux',
      element: <InstallLinux />
    },
    {
      path: '/config',
      element: <GitConfigView />
    },
    {
      path: '/github',
      element: <GitHub />
    },
    {
      path: '/gitlab',
      element: <GitLab />
    },
    {
      path: '/bitbucket',
      element: <BitBucket />
    },
    {
      path: '/tutoriales',
      element: <Tutorials />
    },
    {
      path: '/commands',
      element: <CommandsContainerRoute />
    },
    {
      path: '/test',
      element: <Test />
    },
    {
      path: '*',
      element: <ErrorPage />
    }
  ])

  return routes
}
