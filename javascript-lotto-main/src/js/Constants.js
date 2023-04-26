const constants = {
    lotto: {
        MIN: 1,
        MAX: 45,
        NUMOF: 6,
        PRICEPERLOTTO: 1000,
        MINPRICE: 1000,
    },
    regex: {
        ISALLNUMBER: /^[0-9]*$/,
        ISALLNUMBERANDREST: /^[0-9|,]*$/g,

    },
    winnedLotto: {
        ONE : '1등 당첨 6개 일치 - 2,000,000,000원',
        TWO : '2등 당첨 5개 + 보너스 번호 일치 - 30,000,000원',
        THREE : '3등 당첨 5개 일치 - 1,500,000원',
        FOUR : '4등 당첨 4개 일치 - 50,000원',
        FIVE : '5등 당첨 3개 일치 - 5,000원'
    }

}

export default constants;