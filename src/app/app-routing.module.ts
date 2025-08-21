import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
}, {
  path: 'tabs',
  loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
}, {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, 
{
  path: 'sys-home',
  loadChildren: () => import('./sys-home/sys-home.module').then(m => m.SysHomePageModule)
},
{
  path: 'ht-dangky',
  loadChildren: () => import('./ht-dangky/ht-dangky.module').then(m => m.HtDangkyPageModule)
},
{
  path: 'ht-madonvi',
  loadChildren: () => import('./ht-madonvi/ht-madonvi.module').then(m => m.HtMadonviPageModule)
},
{
  path: 'nhaphang',
  loadChildren: () => import('./nhapkho/nhaphang/nhaphang.module').then(m => m.NhaphangPageModule)
},
{
  path: 'xuathang',
  loadChildren: () => import('./xuatkho/xuathang/xuathang.module').then(m => m.XuathangPageModule)
},
{
  path: 'tonkho',
  loadChildren: () => import('./tonkho/tonkho.module').then(m => m.TonkhoPageModule)
},
{
  path: 'nhaphang-addnew',
  loadChildren: () => import('./nhapkho/nhaphang-addnew/nhaphang-addnew.module').then(m => m.NhaphangAddnewPageModule)
},
{
  path: 'nhaphang-update',
  loadChildren: () => import('./nhapkho/nhaphang-update/nhaphang-update.module').then(m => m.NhaphangUpdatePageModule)
},
{
  path: 'xuathang-addnew',
  loadChildren: () => import('./xuatkho/xuathang-addnew/xuathang-addnew.module').then(m => m.XuathangAddnewPageModule)
},
{
  path: 'xuathang-update',
  loadChildren: () => import('./xuatkho/xuathang-update/xuathang-update.module').then(m => m.XuathangUpdatePageModule)
},
{
  path: 'vattu-index',
  loadChildren: () => import('./vattu/vattu-index/vattu-index.module').then(m => m.VattuIndexPageModule)
},
{
  path: 'kho-index',
  loadChildren: () => import('./kho/kho-index/kho-index.module').then(m => m.KhoIndexPageModule)
},
{
  path: 'donvi-index',
  loadChildren: () => import('./donvi/donvi-index/donvi-index.module').then(m => m.DonviIndexPageModule)
},
{
  path: 'xuathang-detail',
  loadChildren: () => import('./xuatkho/xuathang-detail/xuathang-detail.module').then(m => m.XuathangDetailPageModule)
},
{
  path: 'bill-detail',
  loadChildren: () => import('./bill/bill-detail/bill-detail.module').then(m => m.BillDetailPageModule)
},
{
  path: 'bill-list',
  loadChildren: () => import('./bill/bill-list/bill-list.module').then(m => m.BillListPageModule)
},
{
  path: 'bill-wait',
  loadChildren: () => import('./bill/bill-wait/bill-wait.module').then(m => m.BillWaitPageModule)
},
{
  path: 'nhaphang-detail',
  loadChildren: () => import('./nhapkho/nhaphang-detail/nhaphang-detail.module').then(m => m.NhaphangDetailPageModule)
},

{
  path: 'donvi-create',
  loadChildren: () => import('./donvi/donvi-create/donvi-create.module').then(m => m.DonviCreatePageModule)
},
{
  path: 'kho-create',
  loadChildren: () => import('./kho/kho-create/kho-create.module').then(m => m.KhoCreatePageModule)
},
{
  path: 'test',
  loadChildren: () => import('./test/test.module').then(m => m.TestPageModule)
},
{
  path: 'vattu-list',
  loadChildren: () => import('./vattu/vattu-list/vattu-list.module').then(m => m.VattuListPageModule)
},
{
  path: 'vattu-create',
  loadChildren: () => import('./vattu/vattu-create/vattu-create.module').then(m => m.VattuCreatePageModule)
},
{
  path: 'group-product',
  loadChildren: () => import('./share/group-product/group-product.module').then(m => m.GroupProductPageModule)
},
{
  path: 'hang-san-xuat',
  loadChildren: () => import('./share/hang-san-xuat/hang-san-xuat.module').then(m => m.HangSanXuatPageModule)
},
{
  path: 'nuoc-san-xuat',
  loadChildren: () => import('./share/nuoc-san-xuat/nuoc-san-xuat.module').then(m => m.NuocSanXuatPageModule)
},
{
  path: 'dvt-create',
  loadChildren: () => import('./donvitinh/dvt-create/dvt-create.module').then(m => m.DvtCreatePageModule)
},
  {
    path: 'notifications-list',
    loadChildren: () => import('./notifications-list/notifications-list.module').then( m => m.NotificationsListPageModule)
  },
  {
    path: 'notifications-detail',
    loadChildren: () => import('./notifications-detail/notifications-detail.module').then( m => m.NotificationsDetailPageModule)
  },
  {
    path: 'tonkho-index',
    loadChildren: () => import('./tonkho-index/tonkho-index.module').then( m => m.TonkhoIndexPageModule)
  },
  {
    path: 'saphethan-index',
    loadChildren: () => import('./saphethan-index/saphethan-index.module').then( m => m.SaphethanIndexPageModule)
  },
  {
    path: 'vattu-quocgia',
    loadChildren: () => import('./vattu/vattu-quocgia/vattu-quocgia.module').then( m => m.VattuQuocgiaPageModule)
  },
  {
    path: 'lienthong',
    loadChildren: () => import('./lienthong/lienthong.module').then( m => m.LienthongPageModule)
  }












];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
