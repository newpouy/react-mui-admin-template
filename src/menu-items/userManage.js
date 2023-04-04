// assets
import { IconUsers } from '@tabler/icons'

// constant
const icons = { IconUsers }

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const userManage = {
  id: 'userManage',
  title: '사용자관리',
  type: 'group',
  children: [
    {
      id: 'default',
      title: '사용자목록',
      type: 'item',
      url: '/user',
      icon: icons.IconUsers,
      breadcrumbs: false,
    },
  ],
}

export default userManage
