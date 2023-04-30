import constants from "../Constants";

const InputValidator = {
  validatorHandler(msg, input, ...args) {
    switch (msg) {
      case "1,000원 단위로 주문이 되지 않았습니다.":
        if (!this.checkThousandUnit(input)) {
          throw new Error("1,000원 단위로 주문이 되지 않았습니다.");
        }
        return;
      case "1,000원 미만의 금액이 입력되었습니다.":
        if (!this.checkHigherThanThousand(input)) {
          throw new Error("1,000원 미만의 금액이 입력되었습니다.");
        }
        return;
      case "숫자가 아닌 값이 입력되었습니다.":
        if (!this.checkNumber(input)) {
          throw new Error(msg);
        }
        return;
      case "숫자와 (,)쉼표가 아닌 값이 입력되었습니다.":
        if (!this.checkNumberAndRest(input)) {
          throw new Error("숫자와 (,)쉼표가 아닌 값이 입력되었습니다.");
        }
        return;
      case "범위를 벗어난 숫자가 입력되었습니다.":
        if (!this.checkInputWinNumberRange(input)) {
          throw new Error("범위를 벗어난 숫자가 입력되었습니다.");
        }
        return;
      case "중복된 숫자가 입력되었습니다.":
        if (!this.checkInputDuplicateWinNumber(input)) {
          throw new Error(msg);
        }
        return;
      case "당첨 번호 수가 일치하지 않습니다.":
        if (!this.checkInputNumberOfWin(input)) {
          throw new Error("당첨 번호 수가 일치하지 않습니다.");
        }
        return;
      case "당첨번호와 중복됩니다.":
        if (this.checkInputBonusNumDuplicateWithWinNumbers(input, ...args)) {
          throw new Error("당첨번호와 중복됩니다.");
        }
        return;
      case "y,n 으로 입력해주세요.":
        if (!this.checkYesOrNo(input)) {
          throw new Error("y,n 으로 입력해주세요.");
        }
        return;
    }
  },
  checkYesOrNo(input) {
    if (constants.regex.ISYESORNO.test(input)) {
      return true;
    }
    return false;
  },
  validateInputRestart(input) {
    if (!this.validatorHandler("y,n 으로 입력해주세요.", input)) {
      return false;
    }
    return true;
  },
  checkInputBonusNumDuplicateWithWinNumbers(input, winningNumbers) {
    return winningNumbers.includes(Number(input));
  },
  validateInputBonusNumber(input, winningNumber) {
    this.validatorHandler("숫자가 아닌 값이 입력되었습니다.", input);
    this.validatorHandler("범위를 벗어난 숫자가 입력되었습니다.", input);

    this.validatorHandler("당첨번호와 중복됩니다.", input, winningNumber);
  },

  validateInputWinningNumbers(input) {
    this.validatorHandler("당첨 번호 수가 일치하지 않습니다.", input);
    
    this.validatorHandler("범위를 벗어난 숫자가 입력되었습니다.", input);

    this.validatorHandler("중복된 숫자가 입력되었습니다.", input);
  },
  checkInputNumberOfWin(input) {
    return input.length === constants.lotto.NUMOF;
  },
  checkInputDuplicateWinNumber(input) {
    let winningNumbers = input;
    return winningNumbers.length === new Set(winningNumbers).size;
  },
  checkNumberAndRest(input) {
    return constants.regex.ISALLNUMBERANDREST.test(input);
  },
  validateInputAmountMoney(input) {
    this.validatorHandler("숫자가 아닌 값이 입력되었습니다.", input);
    this.validatorHandler("1,000원 미만의 금액이 입력되었습니다.", input);
    this.validatorHandler("1,000원 단위로 주문이 되지 않았습니다.", input);
  },

  checkInputWinNumberRange(input) {
    for (let number of input) {
      if (
        Number(number) < constants.lotto.MIN ||
        Number(number) > constants.lotto.MAX
      ) {
        return false;
      }
    }
    return true;
  },
  checkNumber(input) {
    return constants.regex.ISALLNUMBER.test(input);
  },
  checkThousandUnit(input) {
    if (input % constants.lotto.PRICEPERLOTTO === 0) {
      return true;
    }
    return false;
  },
  checkHigherThanThousand(input) {
    if (input >= constants.lotto.MINPRICE) {
      return true;
    }
    return false;
  },
};

export default InputValidator;
