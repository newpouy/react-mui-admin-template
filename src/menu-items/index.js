/* eslint-disable prettier/prettier */
// sample page
import dashboard_ from './sample/dashboard_';
import utilities_ from './sample/utilities_';
import other_ from './sample/other_';

// real page
import dashboard from './dashboard';
import userManage from './userManage';
import orderManage from './orderManage';
import matchManage from './matchManage';
import productManage from './productManage';
// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard, userManage, orderManage, matchManage, productManage, dashboard_, utilities_, other_]
};

export default menuItems;
