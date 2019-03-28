const AccountClientTable = {
    headings: {
        account: '帳號',
        email: 'E-mail',
        service_id: '權限',
        status: '狀態',
        id: '功能'
    },
    sortable: ['account', 'email', 'status'],
    filterable: ['account', 'email', 'status'],
    type: {
        account: 1,
        email: 1,
        service_id: 5,
        status: 1,
        id: 0
    },
    display: ['account', 'email', 'status', 'id']
}

const Account = {
    account: {
        text: '帳號',
        value: 'account',
        class: 'subheading grey--text text--darken-1',
        sortable: true,
        type: 1,
        display: true
    },
    email: {
        text: 'E-mail',
        value: 'email',
        class: 'subheading grey--text text--darken-1',
        sortable: true,
        type: 1,
        display: true
    },
    auth: {
        text: '權限',
        value: 'auth',
        class: 'subheading grey--text text--darken-1',
        sortable: false,
        type: 5,
        display: false
    },
    status: {
        text: '狀態',
        value: 'status',
        class: 'subheading grey--text text--darken-1',
        sortable: false,
        type: 1,
        display: true
    },
    button: {
        text: '功能',
        value: 'button',
        class: 'subheading grey--text text--darken-1',
        sortable: false,
        type: 4,
        display: true
    }
}


const CreateAccount = [
    {
        key: 'account',
        title: '帳號',
        type: 1,
        desc: '至少4碼',
        class: [],
        value: '',
        placeholder: '請輸入帳號'
    },
    {
        key: 'password',
        title: '密碼',
        type: 7,
        desc: '需包含大小寫英文+數字, 至少8碼',
        class: [],
        value: '',
        placeholder: '請輸入密碼'
    },
    {
        key: 'email',
        title: 'E-mail',
        type: 1,
        desc: 'Email格式錯誤',
        class: [],
        value: '',
        placeholder: '請輸入E-mail'
    },
    {
        key: 'auth',
        title: '權限',
        type: 6,
        desc: '至少勾選一組權限',
        class: [],
        value: [],
        data: []
    },
    {
        key: 'status',
        title: '狀態',
        type: 3,
        desc: '',
        class: [],
        value: 1,
        placeholder: '請選擇狀態',
        data: [{
          text: '啟用',
          value: 1
        },
        {
          text: '停用',
          value: 2
        }]
    },
];

const StockList = {
    code: {
        text: '股票代號',
        value: 'code',
        class: 'subheading grey--text text--darken-1',
        sortable: true,
        type: 1,
        display: true
    },
    name: {
        text: '股票名稱',
        value: 'name',
        class: 'subheading grey--text text--darken-1',
        sortable: true,
        type: 1,
        display: true
    },
    first_data: {
        text: '資料起始日期',
        value: 'first_data',
        class: 'subheading grey--text text--darken-1',
        sortable: true,
        type: 1,
        display: true
    },
    last_updated: {
        text: '最後更新日期',
        value: 'last_updated',
        class: 'subheading grey--text text--darken-1',
        sortable: true,
        type: 1,
        display: true
    },
    button: {
        text: '功能',
        value: 'button',
        class: 'subheading grey--text text--darken-1',
        sortable: false,
        type: 7,
        display: true
    }
}

const CreateStock = [
    {
        key: 'code',
        title: '股票代號',
        type: 1,
        desc: '',
        class: [],
        value: '',
        placeholder: '請輸入股票代號'
    },
    {
        key: 'name',
        title: '股票名稱',
        type: 1,
        desc: '',
        class: [],
        value: '',
        placeholder: '請輸入股票名稱'
    }
];


export {
    Account,
    CreateAccount,
    StockList,
    CreateStock
};


