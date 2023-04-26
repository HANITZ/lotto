const constants = {
    lotto: {
        MIN: 1,
        MAX: 45,
        NUMOF: 6,
        PRICEPERLOTTO: 1000,
        MINPRICE: 1000,
    },
    regex: {
        ISALLNUMBER: /^[1-9]\d*$/g,
        ISALLNUMBERANDREST: /^[1-9|,]*$/g,

    }
}

export default constants;