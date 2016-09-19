import {Employee} from '../src/employee';
import {Department} from '../src/department';
import {averageSalaryAFTER, averageSalaryBEFORE} from '../src/averageSalary';
import {expect} from 'chai';

describe("average salary", () => {
    console.log(new Date());

    const empls = [
        new Employee("Jim", 100),
        new Employee("John", 200),
        new Employee("Liz", 120),
        new Employee("Penny", 30)
    ];

    const sales = new Department([empls[0], empls[1]]);
    it("calculates the average salary BEFORE Refactoring", () => {
        expect(averageSalaryBEFORE(empls, 50, sales)).to.equal(150);
        expect(averageSalaryBEFORE(empls, 50)).to.equal(140);
    });

    it("calculates the average salary AFTER Refactoring", () => {
        expect(averageSalaryAFTER(empls, [
            (e) => e.salary > 50,
            (e) => sales.works(e)]))
            .to.equal(150);
        expect(averageSalaryAFTER(empls, [
            (e) => e.salary > 50]))
            .to.equal(140);
    });


});
