var calculator = require("../app/calculator");
var assert = require("chai").assert;

describe("add", ()=>{
    function addTest(i, j){
        let expected = i + j;

        it(`add(${i},${j}) expected result ${expected}`,()=>{
            assert.equal(calculator.add(i,j),expected);
        });
    }
    addTest(5,2);
    it(`add(5,2) expected result 8`,()=>{
        assert.equal(calculator.add(5,2),8);
    });
   
});


describe("mul", ()=>{
    function mulTest(i, j){
        let expected = i * j;

        it(`mul(${i},${j}) expected result ${expected}`,()=>{
            assert.equal(calculator.mul(i,j),expected);
        });

    }
    mulTest(5,2);
    it(`mul(5,2) expected result 12`,()=>{
        assert.equal(calculator.mul(5,2),12);
    });
});


describe("div", ()=>{
    function divTest(i, j){
        let expected = i / j;

        it(`div(${i},${j}) expected result ${expected}`,()=>{
            assert.equal(calculator.div(i,j),expected);
        });

    }
    divTest(10,2);

    it(`div(10,2) expected result2`,()=>{
        assert.equal(calculator.div(10,2),2);
    });
});


describe("sub", ()=>{
    function subTest(i, j){
        let expected = i - j;

        it(`sub(${i},${j}) expected result ${expected}`,()=>{
            assert.equal(calculator.sub(i,j),expected);
        });

    }
    subTest(5,2);

    it(`sub(5,2) expected result 5`,()=>{
        assert.equal(calculator.sub(5,2),5);
    });
});