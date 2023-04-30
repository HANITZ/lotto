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
        ISYESORNO: /^[y|n]$/,

    },
    winnedLotto: {
        FIRST: 6,
        SECOND: 5,
        THIRD: 5,
        FOURTH: 4,
        FIFTH: 3,
    },
    restart:{
        'y': true,
        'n': false,
    }

}

export default constants;