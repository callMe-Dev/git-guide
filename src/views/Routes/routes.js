import InstallWindows from '../os_views/InstallWindows/InstallWindows'
import InstallLinux from '../os_views/InstallLinux/InstallLinux'
import InstallMacOs from '../os_views/InstallMacOs/InstallMacos'
import BitBucket from '../Repositories/Bitbucket/Bitbucket'
import GitConfigView from '../GitConfigView/GitConfigView'
import ContentHome from '../ContentHome/ContentHome'
import GitHub from '../Repositories/GitHub/Github'
import GitLab from '../Repositories/GitLab/GitLab'
import Tutorials from '../Tutorials/Tutorials'

export const routes = [
  {
    name: 'root',
    path: '/',
    exact: true,
    component: <ContentHome />
  },
  {
    name: 'windows',
    path: '/windows',
    exact: false,
    component: <InstallWindows />
  },
  {
    name: 'macos',
    path: '/macos',
    exact: false,
    component: <InstallMacOs />
  },
  {
    name: 'linux',
    path: '/linux',
    exact: false,
    component: <InstallLinux />
  },
  {
    name: 'config',
    path: '/config',
    exact: false,
    component: <GitConfigView />
  },
  {
    name: 'github',
    path: '/github',
    exact: false,
    component: <GitHub />
  },
  {
    name: 'gitlab',
    path: '/gitlab',
    exact: false,
    component: <GitLab />
  },
  {
    name: 'bitbucket',
    path: '/bitbucket',
    exact: false,
    component: <BitBucket />
  },
  {
    name: 'tutoriales',
    path: '/tutoriales',
    exact: false,
    component: <Tutorials />
  }
]
