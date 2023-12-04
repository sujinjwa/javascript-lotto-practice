import InputView from '../views/InputView.js';
import hasError from '../utils/hasError.js';
import { validatePurchaseAmount } from '../validator/validator.js';

const InputController = {
  async readPurchaseAmount() {
    const money = await InputView.readPurchaseAmount();

    if (hasError(validatePurchaseAmount, money)) {
      return await this.readPurchaseAmount();
    }

    return money;
  },
};

export default InputController;
