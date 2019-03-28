export default {
  items: [
    {
      name: '首頁',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        // text: 'NEW'
      }
    },
    {
      title: true,
      name: '基本設定',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: '股票設定',
      url: '/stock',
      icon: 'icon-settings'
    },
    {
      title: true,
      name: '盤後資料分析',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: '買賣壓力道比例',
      url: '/buy_sell_percent_report',
      icon: 'icon-settings'
    }
  ]
}
