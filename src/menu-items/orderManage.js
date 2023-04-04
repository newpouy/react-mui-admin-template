// assets
import { IconShoppingCart } from '@tabler/icons'

// constant
const icons = { IconShoppingCart }

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const orderManage = {
  id: 'orderManage',
  title: '주문관리',
  type: 'group',
  children: [
    {
      id: 'default',
      title: '주문목록',
      type: 'item',
      url: '/order',
      icon: icons.IconShoppingCart,
      breadcrumbs: false,
    },
  ],
}

export default orderManage
