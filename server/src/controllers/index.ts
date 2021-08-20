import ErrorHandler from '../models/error-handler';

class ThemeAController {
  defaultMethod() {
    throw new ErrorHandler(501, 'Not implemented method');
    // console.log(`You've reached the ${this.constructor.name} default method`)
    // return {
    //   text: `You've reached the ${this.constructor.name} default method`
    // };
  }
}

export = new ThemeAController();


