class RankItem {
  #rankPlace;
  #winningsAmount;
  #requirements;

  constructor(rankPlace, winningsAmount, requirements) {
    this.#rankPlace = rankPlace;
    this.#winningsAmount = winningsAmount;
    this.#requirements = requirements;
  }

  isWinning(result) {
    if (this.#rankPlace === 2 || this.#rankPlace === 3) {
      return this.#checkAll(result);
    }

    return this.#checkOnlyNumbers(result);
  }

  #checkAll(result) {
    return (
      this.#requirements.sameNumbers === result.sameNumbers &&
      this.#requirements.bonus === result.bonus
    );
  }

  #checkOnlyNumbers(result) {
    return this.#requirements.sameNumbers === result.sameNumbers;
  }

  getPlace() {
    return this.#rankPlace;
  }
}

export default RankItem;
