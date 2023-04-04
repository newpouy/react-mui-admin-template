// assets
import { IconHeart } from '@tabler/icons'

// constant
const icons = { IconHeart }

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const matchManage = {
  id: 'matchManage',
  title: '매칭관리',
  type: 'group',
  children: [
    {
      id: 'default',
      title: '매칭목록',
      type: 'item',
      url: '/match',
      icon: icons.IconHeart,
      breadcrumbs: false,
    },
  ],
}

export default matchManage
