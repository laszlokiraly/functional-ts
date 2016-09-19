import {Employee} from './employee';
import {Department} from './department';
import {Predicate, and} from './predicate';
import {average} from './util';

function averageSalaryBEFORE(employees: Employee[], minSalary: number, department?: Department): number {
    let total = 0;
    let count = 0;

    employees.forEach((e) => {
        if (minSalary <= e.salary && (department === undefined || department.works(e))) {
            total += e.salary;
            count += 1;
        }
    });

    return total === 0 ? 0 : total / count;
}

function employeeSalaries(employees: Employee[], conditions: Predicate[]): number[] {
    const filteredEmployees = employees.filter(and(conditions));
    return filteredEmployees.map(employee => employee.salary);
}

function averageSalaryAFTER(employees: Employee[], conditions: Predicate[]): number {
    return average(employeeSalaries(employees, conditions));
}

export {averageSalaryAFTER, averageSalaryBEFORE};
