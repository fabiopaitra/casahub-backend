class ThemeBController {
  defaultMethod() {
    console.log(`You've reached the ${this.constructor.name} default method`)
    return {
      text: `You've reached the ${this.constructor.name} default method`
    };
  }
}

export = new ThemeBController();