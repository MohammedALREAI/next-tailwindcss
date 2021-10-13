export interface IFooterLinks {
    title: string;
    path: string;
}

interface IAllfooterLinks {
    left: Array<IFooterLinks>;
    right: Array<IFooterLinks>;
}
export const footerLinks: IAllfooterLinks = {
    left: [
        { title: 'DaPP', path: '/my-account' },
        { title: 'Saving', path: '/saving' },
        { title: 'reward', path: '/reward' },
        { title: 'swap', path: '/swap' },
        {
            title: 'CONVERT',
            path: 'https://my.cctip.io/token/exchange/orders/create?base_symbol=SLP-TOU&quote_symbol=TOU',
        },
        { title: 'ens', path: 'ens' },
    ],
    right: [
        { title: 'trading', path: '/trading' },
        { title: 'Easy Buy ', path: 'https://switchdex.ag/#/instant?token=0x1e29ca8c874b4dff828297cc2e9856819eea0933' },
        { title: 'Explorer', path: 'https://etherscan.io/token/0x1e29ca8c874b4dff828297cc2e9856819eea0933' },
        { title: 'coinmarketcap', path: 'https://coinmarketcap.com/currencies/touristoken/' },
        {
            title: 'CONVERT',
            path: 'https://my.cctip.io/token/exchange/orders/create?base_symbol=SLP-TOU&quote_symbol=TOU',
        },
        { title: 'TOURISTOKEN.ETH', path: 'https://etherscan.io/address/touristoken.eth' },
        {
            title: 'TOURISTOKEN.CRYPTO',
            path: 'https://gateway.pinata.cloud/ipfs/QmeWCFKSC3h3zzNxzMBDE3zWSuYJ7TbVWKsfUt512hFGYi/index.html',
        },
    ],
};
