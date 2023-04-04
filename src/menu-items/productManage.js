// assets
import { IconBuildingStore } from '@tabler/icons'

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const productManage = {
  id: 'productManage',
  title: '상품관리',
  type: 'group',
  children: [
    {
      id: 'default',
      title: '상품목록',
      type: 'item',
      url: '/product',
      icon: IconBuildingStore,
      breadcrumbs: false,
    },
  ],
}

export default productManage
