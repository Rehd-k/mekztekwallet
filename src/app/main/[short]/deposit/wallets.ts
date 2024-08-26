const wallets = [
    {
        coin: 'ADA',
        wallet_address: 'addr1q8v5dfw5a0zxk9xlc3dtnm2ualydgxh7shqe3xcqn2x955pd45wen5cr623xc3hprdxugv9se4q8qa0dgdhvjqljxurqpc2v02',
        wallet_address_small: 'addr1q8v5dfw5a0zxk9xlc3dtnm2 ualydgxh7shqe3xcqn2x955pd45wen5 cr623xc3hprdxugv9se4q8qa0dgdhv jqljxurqpc2v02'
    },
    {
        coin: 'ETH',
        wallet_address: '0xE4126F69a84653ec8773b65c239364E11B8DBc37',
        wallet_address_small: '0xE4126F69a84653ec8773b65c239 364E11B8DBc37'
    },
    {
        coin: 'BTC',
        wallet_address: 'bc1q48tlkca08sg4kw2k9hcdpjhl7hvqfwjlrz267c',
        wallet_address_small: 'bc1q48tlkca08sg4kw2k9hcdpjhl7 hvqfwjlrz267c'
    },
    {
        coin: 'BNB',
        wallet_address: 'bnb1zffeg2m5jr4zscmjjrxc900u5h74u34cuqtdac',
        wallet_address_small: 'bnb1zffeg2m5jr4zscmjjrxc900u 5h74u34cuqtdac',
    },
    {
        coin: 'DODGE',
        wallet_address: 'DJZQPHHh9V5EJYepFxR5MjjXiRNkJ9ni3u',
        wallet_address_small: 'DJZQPHHh9V5EJYepFxR5MjjX iRNkJ9ni3u'
    },
    {
        coin : 'XRP',
        wallet_address: 'rrp1RT26aBBjn1x4AxUsdhbp9r3BV1io8G',
        wallet_address_small: 'rrp1RT26aBBjn1x4Ax Usdhbp9r3BV1io8G'
    },
    {
        coin : 'LTC',
        wallet_address: 'ltc1ql4aq2qn8evhnhzdn76tje7lng0ytx38s2ayc6f',
        wallet_address_small : 'ltc1ql4aq2qn8evhnhz dn76tje7lng0ytx38s2ayc6f'
    },
    {
        coin : 'TRC',
        wallet_address: 'TXNPPDgpzKJZA4fsBZBTZDqCHTKv8dAaaE',
        wallet_address_small : 'TXNPPDgpzKJZA4fsBZ BTZDqCHTKv8dAaaE'
    },
    {
        coin : 'SHIB',
        wallet_address: '0xE4126F69a84653ec8773b65c239364E11B8DBc37',
        wallet_address_small : '0xE4126F69a84653ec8773 b65c239364E11B8DBc37'
    },
    {
        coin : 'MATIC',
        wallet_address: '0xE4126F69a84653ec8773b65c239364E11B8DBc37',
        wallet_address_small : '0xE4126F69a84653ec8773 b65c239364E11B8DBc37'
    },
    {
        coin : 'FTM',
        wallet_address: '0xE4126F69a84653ec8773b65c239364E11B8DBc37',
        wallet_address_small : '0xE4126F69a84653ec8773 b65c239364E11B8DBc37'
    },
    {
        coin : 'XLM',
        wallet_address: 'GB37AS4RX5WQGENZ5IOHZJWLCF34PBD6J2ZPUB2HC3CQ3ZOUJTG7I43Q',
        wallet_address_small : 'GB37AS4RX5WQGENZ5IOHZJWLCF3 4PBD6J2ZPUB2HC3CQ3ZOUJTG7I43Q'
    },
    {
        coin : 'ALGO',
        wallet_address: '7YLW5Q4VCAVISU7OK3P4BX7I7QNOOEXCK37FUUDOPHLKCRPERSYDVVV7QE',
        wallet_address_small : '7YLW5Q4VCAVISU7OK3P4BX7I7QNOO EXCK37FUUDOPHLKCRPERSYDVVV7QE'
    },
    {
        coin : 'PEPE',
        wallet_address: '0xE4126F69a84653ec8773b65c239364E11B8DBc37',
        wallet_address_small : '0xE4126F69a84653ec87 73b65c239364E11B8DBc37'
    },
    {
        coin : 'SOL',
        wallet_address: 'HQfsVsn2dL2K25wem73UMJUrcXAGXtfffJCxeyY1zjUW',
        wallet_address_small : 'HQfsVsn2dL2K25wem73UM JUrcXAGXtfffJCxeyY1zjUW'
    }
]


export const getWallet = (opened: string) => {
    const coinIndex = wallets.findIndex(res => {
        return res.coin == opened
    })
    console.log(coinIndex, opened)
    if (coinIndex != -1) {

        return {
            big: wallets[coinIndex].wallet_address,
            small: wallets[coinIndex].wallet_address_small
        }
    } else {
        return {
            big: wallets[2].wallet_address,
            small: wallets[2].wallet_address_small
        }
    }
}

