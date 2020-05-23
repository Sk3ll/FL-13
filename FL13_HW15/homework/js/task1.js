// TODO: Your code goes here

function myAssign(target, ...sources) {
    sources.forEach(source => {
      Object.defineProperties(target, Object.keys(source).reduce((descriptors, key) => {
        descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
        return descriptors;
      }, {}));
    });
    return target;
  }


const paymentsCard = { cash: '100$' };
const creditCard = { creditLimit: '50$', cash: '200$' };

const universalCard = myAssign({}, creditCard, paymentsCard);
