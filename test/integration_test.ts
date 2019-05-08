import { hello } from "../src/hello";
import { expect } from "chai";
import { Sinon } from "sinon";

import 'mocha';

describe('Hello function', () => {

  it('should return hello world', () => {
    const result = hello();
    expect(result).to.equal('Hello world!');
  });

});