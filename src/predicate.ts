import {Employee} from './employee';

type Predicate = (e: Employee) => boolean;

function and(predicates: Predicate[]): Predicate {
  return (e) => predicates.every(p => p(e));
}
export {Predicate, and};
