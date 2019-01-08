import Account from './Account';
import Category from './Category';
import Payee from './Payee';
import Person from './Person';
import Transaction from './Transaction';

interface ClassDataMapped {
  accounts: Account[];
  categories: Category[];
  payees: Payee[];
  people: Person[];
  tx: Transaction[];

  [ key: string ]: any;
}

const accounts: Account[] = [
  {
    id: '1',
    personId: '201',
    accountTypeId: '1',
    startingBalance: 1000,
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    accountType: {
      id: '1',
      accountTypeName: 'Checking',
      interestRate: 0
    },
    accountName: 'Checking'
  },
  {
    id: '2',
    personId: '201',
    accountTypeId: '2',
    startingBalance: 10000,
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    accountType: {
      id: '2',
      accountTypeName: 'Savings',
      interestRate: 0.02
    },
    accountName: 'Savings'
  },
  {
    id: '3',
    personId: '202',
    accountTypeId: '1',
    startingBalance: 500,
    person: {
      firstName: 'Lucas',
      lastName: 'Trent',
      gender: 'male',
      dateOfBirth: '1983-02-12',
      id: '202',
      address: {
        street: '8966 Telly Tunnel',
        city: 'Rickashire',
        state: 'OR',
        zip: '90822-8587'
      }
    },
    accountType: {
      id: '1',
      accountTypeName: 'Checking',
      interestRate: 0
    },
    accountName: 'Checking'
  },
  {
    id: '4',
    personId: '202',
    accountTypeId: '2',
    startingBalance: 100,
    person: {
      firstName: 'Lucas',
      lastName: 'Trent',
      gender: 'male',
      dateOfBirth: '1983-02-12',
      id: '202',
      address: {
        street: '8966 Telly Tunnel',
        city: 'Rickashire',
        state: 'OR',
        zip: '90822-8587'
      }
    },
    accountType: {
      id: '2',
      accountTypeName: 'Savings',
      interestRate: 0.02
    },
    accountName: 'Savings'
  },
  {
    id: '5',
    personId: '203',
    accountTypeId: '1',
    startingBalance: 865,
    person: {
      firstName: 'Jack',
      lastName: 'Hawksmoor',
      gender: 'male',
      dateOfBirth: '1974-03-26',
      id: '203',
      address: {
        street: '86853 Donnelly Circle',
        city: 'Annester',
        state: 'IA',
        zip: '42783'
      }
    },
    accountType: {
      id: '1',
      accountTypeName: 'Checking',
      interestRate: 0
    },
    accountName: 'Checking'
  }
];
const categories: Category[] = [
  {
    id: '1',
    categoryName: 'Salary',
    categoryType: 'income'
  },
  {
    id: '2',
    categoryName: 'Other income',
    categoryType: 'income'
  },
  {
    id: '3',
    categoryName: 'Interest',
    categoryType: 'income'
  },
  {
    id: '101',
    categoryName: 'Clothing',
    categoryType: 'expense'
  },
  {
    id: '102',
    categoryName: 'Housing',
    categoryType: 'expense'
  },
  {
    id: '103',
    categoryName: 'Food',
    categoryType: 'expense'
  },
  {
    id: '104',
    categoryName: 'Entertainment',
    categoryType: 'expense'
  },
  {
    id: '105',
    categoryName: 'Medical',
    categoryType: 'expense'
  },
  {
    id: '106',
    categoryName: 'Utilities',
    categoryType: 'expense'
  },
  {
    id: '107',
    categoryName: 'Transportation',
    categoryType: 'expense'
  },
  {
    id: '108',
    categoryName: 'Cash',
    categoryType: 'expense'
  }
];
const payees: Payee[] = [
  {
    id: '1',
    payeeName: 'DCH Mortgages',
    address: '1285 Rezlog Plaza',
    city: 'Powhatan',
    state: 'RI',
    zip: '02212',
    categoryId: '102',
    image: null,
    motto: null,
    active: true,
    category: {
      id: '102',
      categoryName: 'Housing',
      categoryType: 'expense'
    }
  },
  {
    id: '2',
    payeeName: 'Ill Communication Telephones',
    address: '1597 Figole Grove',
    city: 'Akron',
    state: 'OH',
    zip: '66345',
    categoryId: '106',
    image: null,
    motto: null,
    active: true,
    category: {
      id: '106',
      categoryName: 'Utilities',
      categoryType: 'expense'
    }
  },
  {
    id: '3',
    payeeName: 'Erol\'s Internet',
    address: '453 Loma Linda Junction',
    city: 'Kansas City',
    state: 'KS',
    zip: '60019',
    categoryId: '106',
    image: null,
    motto: null,
    active: true,
    category: {
      id: '106',
      categoryName: 'Utilities',
      categoryType: 'expense'
    }
  },
  {
    id: '4',
    payeeName: 'Acme Products, Inc',
    address: '1669 Divided Court',
    city: 'Cheyenne',
    state: 'WY',
    zip: '48324',
    categoryId: '103',
    image: null,
    motto: null,
    active: true,
    category: {
      id: '103',
      categoryName: 'Food',
      categoryType: 'expense'
    }
  },
  {
    id: '5',
    payeeName: 'Shop-Rite Grocery Store',
    address: '311 St. Paul Ave.',
    city: 'Baltimore',
    state: 'MD',
    zip: '08697',
    categoryId: '103',
    image: null,
    motto: null,
    active: true,
    category: {
      id: '103',
      categoryName: 'Food',
      categoryType: 'expense'
    }
  },
  {
    id: '6',
    payeeName: 'Sushi Land',
    address: '808 Calvert St.',
    city: 'Baltimore',
    state: 'MD',
    zip: '01848',
    categoryId: '103',
    image: null,
    motto: null,
    active: true,
    category: {
      id: '103',
      categoryName: 'Food',
      categoryType: 'expense'
    }
  },
  {
    id: '7',
    payeeName: 'Worthless Peon Productions',
    address: '125 Scrub Street',
    city: 'Santa Monica',
    state: 'CA',
    zip: '90111',
    categoryId: '104',
    image: null,
    motto: null,
    active: true,
    category: {
      id: '104',
      categoryName: 'Entertainment',
      categoryType: 'expense'
    }
  },
  {
    id: '8',
    payeeName: 'The CX Institute',
    address: '1715 Greymalkin Lane',
    city: 'Westchester',
    state: 'NY',
    zip: '10047',
    categoryId: '3',
    image: null,
    motto: null,
    active: true,
    category: {
      id: '3',
      categoryName: 'Interest',
      categoryType: 'income'
    }
  },
  {
    id: '9',
    payeeName: 'Gleichner, Lind and Olson, Ltd.',
    categoryId: '107',
    address: '142 Wune Street',
    city: 'Deetelu',
    state: 'WV',
    zip: '80587',
    image: '/images/animals/9.jpg',
    motto: 'Optimized executive frame',
    active: true,
    category: {
      id: '107',
      categoryName: 'Transportation',
      categoryType: 'expense'
    }
  },
  {
    id: '10',
    payeeName: 'Klein Cars',
    address: '1939 Rolfs Pass',
    city: 'Baltimore',
    state: 'MD',
    zip: '97394',
    categoryId: '107',
    image: '/images/technics/4.jpg',
    motto: 'Seamless heuristic process improvement',
    active: true,
    category: {
      id: '107',
      categoryName: 'Transportation',
      categoryType: 'expense'
    }
  },
  {
    id: '11',
    payeeName: 'Spinka Salon',
    categoryId: '2',
    address: '857 Descartes Turnpike',
    city: 'Palomar',
    state: 'CA',
    zip: '99533',
    image: '/images/cats/10.jpg',
    motto: 'Monitored encompassing workforce',
    active: true,
    category: {
      id: '2',
      categoryName: 'Other income',
      categoryType: 'income'
    }
  },
  {
    id: '12',
    payeeName: 'Bauch-Stehr Medical Partners',
    address: '671 York Ave',
    city: 'Baltimore',
    state: 'MD',
    zip: '54952',
    categoryId: '105',
    image: '/images/business/3.jpg',
    motto: 'Versatile optimizing support',
    active: true,
    category: {
      id: '105',
      categoryName: 'Medical',
      categoryType: 'expense'
    }
  },
  {
    id: '13',
    payeeName: 'The Senator Theater',
    address: '1689 North York Rd',
    city: 'Baltimore',
    state: 'MD',
    zip: '48693',
    categoryId: '104',
    image: '/images/business/5.jpg',
    motto: 'Yesterday\'s movies tomorrow',
    active: true,
    category: {
      id: '104',
      categoryName: 'Entertainment',
      categoryType: 'expense'
    }
  },
  {
    id: '14',
    payeeName: 'Ziener & Ratke, Pediatrics',
    address: '1873 Razif Loop',
    city: 'Fonzopo',
    state: 'FL',
    zip: '55902',
    categoryId: '105',
    image: '/images/business/2.jpg',
    motto: 'Multi-lateral grid-enabled toolset',
    active: true,
    category: {
      id: '105',
      categoryName: 'Medical',
      categoryType: 'expense'
    }
  },
  {
    id: '15',
    payeeName: 'Heathcote Inc',
    address: '798 Defarge Point',
    city: 'Tajuwbi',
    state: 'WI',
    zip: '88464',
    categoryId: '103',
    image: '/images/business/3.jpg',
    motto: 'Secured web-enabled Graphical Clothing Interface',
    active: true,
    category: {
      id: '103',
      categoryName: 'Food',
      categoryType: 'expense'
    }
  },
  {
    id: '16',
    payeeName: 'Davis, Muller and Marvin',
    address: '319 Nazmo Road',
    city: 'Sohcutzeh',
    state: 'VT',
    zip: '09725',
    categoryId: '104',
    image: '/images/technics/1.jpg',
    motto: 'Persevering regional moratorium',
    active: true,
    category: {
      id: '104',
      categoryName: 'Entertainment',
      categoryType: 'expense'
    }
  },
  {
    id: '17',
    payeeName: 'Deckow-Hand',
    address: '1622 Avena Circle',
    city: 'Nuebaheh',
    state: 'MA',
    zip: '52038',
    categoryId: '106',
    image: '/images/animals/9.jpg',
    motto: 'Cloned directional attitude',
    active: true,
    category: {
      id: '106',
      categoryName: 'Utilities',
      categoryType: 'expense'
    }
  },
  {
    id: '18',
    payeeName: 'Watsica Design',
    address: '289 Vaewi Avenue',
    city: 'Dorgaec',
    state: 'WY',
    zip: '19966',
    categoryId: '102',
    image: '/images/business/5.jpg',
    motto: 'Streamlined full-range budgetary management',
    active: true,
    category: {
      id: '102',
      categoryName: 'Housing',
      categoryType: 'expense'
    }
  },
  {
    id: '19',
    payeeName: 'Wayne Enterprises',
    categoryId: '107',
    address: '319 Thomas Wayne Road',
    city: 'Gotham',
    state: 'NY',
    zip: '10939',
    image: '/images/technics/1.jpg',
    motto: 'Persevering regional moratorium',
    active: true,
    category: {
      id: '107',
      categoryName: 'Transportation',
      categoryType: 'expense'
    }
  },
  {
    id: '20',
    payeeName: 'Stark Electronics',
    categoryId: '3',
    address: '1146 Kubo Parkway',
    city: 'Cupertino',
    state: 'CA',
    zip: '96412',
    image: '/images/nature/3.jpg',
    motto: 'Function-based logistical paradigm',
    active: true,
    category: {
      id: '3',
      categoryName: 'Interest',
      categoryType: 'income'
    }
  },
  {
    id: '21',
    payeeName: 'Tyrell Corporation',
    categoryId: '2',
    address: '841 Pewuj Court',
    city: 'Netseyev',
    state: 'NY',
    zip: '86629',
    image: '/images/technics/7.jpg',
    motto: 'Diverse optimizing paradigm',
    active: true,
    category: {
      id: '2',
      categoryName: 'Other income',
      categoryType: 'income'
    }
  },
  {
    id: '22',
    payeeName: 'Yoyodyne Propulsion Systems',
    categoryId: '1',
    address: '16 Blue Blazer Way',
    city: 'Grover\'s Mill',
    state: 'NJ',
    zip: '07561',
    image: '/images/cats/3.jpg',
    motto: 'Synchronised systemic internet solution',
    active: true,
    category: {
      id: '1',
      categoryName: 'Salary',
      categoryType: 'income'
    }
  },
  {
    id: '23',
    payeeName: 'Goodman, Lieber, Kurtzberg, Holliway',
    categoryId: '1',
    address: '16 W 12 St.',
    city: 'New York',
    state: 'NY',
    zip: '10015',
    image: '/images/animals/9.jpg',
    motto: null,
    active: true,
    category: {
      id: '1',
      categoryName: 'Salary',
      categoryType: 'income'
    }
  },
  {
    id: '24',
    payeeName: 'Rodriguez Outfitting',
    categoryId: '101',
    address: '587 Ipobak Terrace',
    city: 'Alexandria',
    state: 'VA',
    zip: '16097',
    image: '/images/nature/6.jpg',
    motto: 'Operative maximized matrices',
    active: true,
    category: {
      id: '101',
      categoryName: 'Clothing',
      categoryType: 'expense'
    }
  },
  {
    id: '25',
    payeeName: 'Tower Shields',
    categoryId: '101',
    address: '289 Vaewi Avenue',
    city: 'Dorkachek',
    state: 'WY',
    zip: '19966',
    image: '/images/business/5.jpg',
    motto: 'Streamlined full-range budgetary management',
    active: true,
    category: {
      id: '101',
      categoryName: 'Clothing',
      categoryType: 'expense'
    }
  },
  {
    id: '26',
    payeeName: 'Cash Withdrawal',
    categoryId: '108',
    active: true,
    category: {
      id: '108',
      categoryName: 'Cash',
      categoryType: 'expense'
    }
  }
];
const people: Person[] = [
  {
    firstName: 'Jenny',
    lastName: 'Sparks',
    gender: 'female',
    dateOfBirth: '1995-01-01',
    id: '201',
    address: {
      street: '47 Kuhlman Place',
      city: 'New Queensborough',
      state: 'NV',
      zip: '90498-1073'
    }
  },
  {
    firstName: 'Lucas',
    lastName: 'Trent',
    gender: 'male',
    dateOfBirth: '1983-02-12',
    id: '202',
    address: {
      street: '8966 Telly Tunnel',
      city: 'Rickashire',
      state: 'OR',
      zip: '90822-8587'
    }
  },
  {
    firstName: 'Jack',
    lastName: 'Hawksmoor',
    gender: 'male',
    dateOfBirth: '1974-03-26',
    id: '203',
    address: {
      street: '86853 Donnelly Circle',
      city: 'Annester',
      state: 'IA',
      zip: '42783'
    }
  },
  {
    firstName: 'Jeroen',
    lastName: 'Thornedike',
    gender: 'male',
    dateOfBirth: '1984-04-07',
    id: '204',
    address: {
      street: '851 Matt Station',
      city: 'Ovorp',
      state: 'UT',
      zip: '69781-5546'
    }
  },
  {
    firstName: 'Angela',
    lastName: 'Cortez',
    gender: 'female',
    dateOfBirth: '1979-05-15',
    id: '205',
    address: {
      street: '0546 Baumbach Street',
      city: 'Garrison',
      state: 'AK',
      zip: '27323-2569'
    }
  },
  {
    firstName: 'Shen',
    lastName: 'Li-Min',
    gender: 'female',
    dateOfBirth: '1990-06-30',
    id: '206',
    address: {
      street: '293 Muller Street',
      city: 'Leffler',
      state: 'VT',
      zip: '33861-2679'
    }
  },
  {
    firstName: 'Spider',
    lastName: 'Jerusalem',
    gender: 'male',
    dateOfBirth: '1977-07-05',
    id: '207',
    address: {
      street: '282 Queenie Drives',
      city: 'Hesselview',
      state: 'AL',
      zip: '04221'
    }
  },
  {
    firstName: 'Jakita',
    lastName: 'Wagner',
    gender: 'female',
    dateOfBirth: '1988-08-12',
    id: '208',
    address: {
      street: '46892 Virgil Hill',
      city: 'Quantico',
      state: 'VA',
      zip: '68699'
    }
  },
  {
    firstName: 'Elijah',
    lastName: 'Snow',
    gender: 'male',
    dateOfBirth: '1968-09-19',
    id: '209',
    address: {
      street: '558 Jalyn Meadow',
      city: 'Roscoe',
      state: 'AR',
      zip: '50499-5983'
    }
  },
  {
    firstName: 'Ambrose',
    lastName: 'Chase',
    gender: 'male',
    dateOfBirth: '1993-10-22',
    id: '210',
    address: {
      street: '4767 Ibrahim Overpass',
      city: 'Portsmouth',
      state: 'RI',
      zip: '24622'
    }
  }
];
const tx: Transaction[] = [
  {
    id: '1',
    payeeId: '1',
    personId: '201',
    categoryId: '102',
    category: {
      id: '102',
      categoryName: 'Housing',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-06-01T04:00:00.000Z',
    amount: -1600,
    payee: {
      id: '1',
      payeeName: 'DCH Mortgages',
      address: '1285 Rezlog Plaza',
      city: 'Powhatan',
      state: 'RI',
      zip: '02212',
      categoryId: '102',
      image: null,
      motto: null,
      active: true,
      category: {
        id: '102',
        categoryName: 'Housing',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '2',
    payeeId: '2',
    personId: '201',
    categoryId: '106',
    category: {
      id: '106',
      categoryName: 'Utilities',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-06-10T04:00:00.000Z',
    amount: -22.5,
    payee: {
      id: '2',
      payeeName: 'Ill Communication Telephones',
      address: '1597 Figole Grove',
      city: 'Akron',
      state: 'OH',
      zip: '66345',
      categoryId: '106',
      image: null,
      motto: null,
      active: true,
      category: {
        id: '106',
        categoryName: 'Utilities',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '3',
    payeeId: '3',
    personId: '201',
    categoryId: '106',
    category: {
      id: '106',
      categoryName: 'Utilities',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-06-20T04:00:00.000Z',
    amount: -86.25,
    payee: {
      id: '3',
      payeeName: 'Erol\'s Internet',
      address: '453 Loma Linda Junction',
      city: 'Kansas City',
      state: 'KS',
      zip: '60019',
      categoryId: '106',
      image: null,
      motto: null,
      active: true,
      category: {
        id: '106',
        categoryName: 'Utilities',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '4',
    payeeId: '12',
    personId: '201',
    categoryId: '105',
    category: {
      id: '105',
      categoryName: 'Medical',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-14T00:49:00.000Z',
    amount: -115,
    payee: {
      id: '12',
      payeeName: 'Bauch-Stehr Medical Partners',
      address: '671 York Ave',
      city: 'Baltimore',
      state: 'MD',
      zip: '54952',
      categoryId: '105',
      image: '/images/business/3.jpg',
      motto: 'Versatile optimizing support',
      active: true,
      category: {
        id: '105',
        categoryName: 'Medical',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '5',
    payeeId: '14',
    personId: '201',
    categoryId: '105',
    category: {
      id: '105',
      categoryName: 'Medical',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-09T16:06:00.000Z',
    amount: -86.25,
    payee: {
      id: '14',
      payeeName: 'Ziener & Ratke, Pediatrics',
      address: '1873 Razif Loop',
      city: 'Fonzopo',
      state: 'FL',
      zip: '55902',
      categoryId: '105',
      image: '/images/business/2.jpg',
      motto: 'Multi-lateral grid-enabled toolset',
      active: true,
      category: {
        id: '105',
        categoryName: 'Medical',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '6',
    payeeId: '17',
    personId: '201',
    categoryId: '106',
    category: {
      id: '106',
      categoryName: 'Utilities',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-06-25T04:00:00.000Z',
    amount: -9.75,
    payee: {
      id: '17',
      payeeName: 'Deckow-Hand',
      address: '1622 Avena Circle',
      city: 'Nuebaheh',
      state: 'MA',
      zip: '52038',
      categoryId: '106',
      image: '/images/animals/9.jpg',
      motto: 'Cloned directional attitude',
      active: true,
      category: {
        id: '106',
        categoryName: 'Utilities',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '7',
    payeeId: '4',
    personId: '201',
    categoryId: '103',
    category: {
      id: '103',
      categoryName: 'Food',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-29T17:01:00.000Z',
    amount: -7.5,
    payee: {
      id: '4',
      payeeName: 'Acme Products, Inc',
      address: '1669 Divided Court',
      city: 'Cheyenne',
      state: 'WY',
      zip: '48324',
      categoryId: '103',
      image: null,
      motto: null,
      active: true,
      category: {
        id: '103',
        categoryName: 'Food',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '8',
    payeeId: '16',
    personId: '201',
    categoryId: '104',
    category: {
      id: '104',
      categoryName: 'Entertainment',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-07T22:46:00.000Z',
    amount: -6.75,
    payee: {
      id: '16',
      payeeName: 'Davis, Muller and Marvin',
      address: '319 Nazmo Road',
      city: 'Sohcutzeh',
      state: 'VT',
      zip: '09725',
      categoryId: '104',
      image: '/images/technics/1.jpg',
      motto: 'Persevering regional moratorium',
      active: true,
      category: {
        id: '104',
        categoryName: 'Entertainment',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '9',
    payeeId: '7',
    personId: '201',
    categoryId: '104',
    category: {
      id: '104',
      categoryName: 'Entertainment',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-06T21:42:00.000Z',
    amount: -34.5,
    payee: {
      id: '7',
      payeeName: 'Worthless Peon Productions',
      address: '125 Scrub Street',
      city: 'Santa Monica',
      state: 'CA',
      zip: '90111',
      categoryId: '104',
      image: null,
      motto: null,
      active: true,
      category: {
        id: '104',
        categoryName: 'Entertainment',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '10',
    payeeId: '26',
    personId: '201',
    categoryId: '108',
    category: {
      id: '108',
      categoryName: 'Cash',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-29T18:38:00.000Z',
    amount: -60,
    payee: {
      id: '26',
      payeeName: 'Cash Withdrawal',
      categoryId: '108',
      active: true,
      category: {
        id: '108',
        categoryName: 'Cash',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '11',
    payeeId: '6',
    personId: '201',
    categoryId: '103',
    category: {
      id: '103',
      categoryName: 'Food',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-23T20:18:00.000Z',
    amount: -6,
    payee: {
      id: '6',
      payeeName: 'Sushi Land',
      address: '808 Calvert St.',
      city: 'Baltimore',
      state: 'MD',
      zip: '01848',
      categoryId: '103',
      image: null,
      motto: null,
      active: true,
      category: {
        id: '103',
        categoryName: 'Food',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '12',
    payeeId: '18',
    personId: '201',
    categoryId: '102',
    category: {
      id: '102',
      categoryName: 'Housing',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-31T21:45:00.000Z',
    amount: -45,
    payee: {
      id: '18',
      payeeName: 'Watsica Design',
      address: '289 Vaewi Avenue',
      city: 'Dorgaec',
      state: 'WY',
      zip: '19966',
      categoryId: '102',
      image: '/images/business/5.jpg',
      motto: 'Streamlined full-range budgetary management',
      active: true,
      category: {
        id: '102',
        categoryName: 'Housing',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '13',
    payeeId: '25',
    personId: '201',
    categoryId: '101',
    category: {
      id: '101',
      categoryName: 'Clothing',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-24T23:20:00.000Z',
    amount: -46,
    payee: {
      id: '25',
      payeeName: 'Tower Shields',
      categoryId: '101',
      address: '289 Vaewi Avenue',
      city: 'Dorkachek',
      state: 'WY',
      zip: '19966',
      image: '/images/business/5.jpg',
      motto: 'Streamlined full-range budgetary management',
      active: true,
      category: {
        id: '101',
        categoryName: 'Clothing',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '14',
    payeeId: '15',
    personId: '201',
    categoryId: '103',
    category: {
      id: '103',
      categoryName: 'Food',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-16T23:05:00.000Z',
    amount: -5.25,
    payee: {
      id: '15',
      payeeName: 'Heathcote Inc',
      address: '798 Defarge Point',
      city: 'Tajuwbi',
      state: 'WI',
      zip: '88464',
      categoryId: '103',
      image: '/images/business/3.jpg',
      motto: 'Secured web-enabled Graphical Clothing Interface',
      active: true,
      category: {
        id: '103',
        categoryName: 'Food',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '15',
    payeeId: '13',
    personId: '201',
    categoryId: '104',
    category: {
      id: '104',
      categoryName: 'Entertainment',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-31T00:02:00.000Z',
    amount: -3.75,
    payee: {
      id: '13',
      payeeName: 'The Senator Theater',
      address: '1689 North York Rd',
      city: 'Baltimore',
      state: 'MD',
      zip: '48693',
      categoryId: '104',
      image: '/images/business/5.jpg',
      motto: 'Yesterday\'s movies tomorrow',
      active: true,
      category: {
        id: '104',
        categoryName: 'Entertainment',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '16',
    payeeId: '19',
    personId: '201',
    categoryId: '107',
    category: {
      id: '107',
      categoryName: 'Transportation',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-29T20:35:00.000Z',
    amount: -28.75,
    payee: {
      id: '19',
      payeeName: 'Wayne Enterprises',
      categoryId: '107',
      address: '319 Thomas Wayne Road',
      city: 'Gotham',
      state: 'NY',
      zip: '10939',
      image: '/images/technics/1.jpg',
      motto: 'Persevering regional moratorium',
      active: true,
      category: {
        id: '107',
        categoryName: 'Transportation',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '17',
    payeeId: '9',
    personId: '201',
    categoryId: '107',
    category: {
      id: '107',
      categoryName: 'Transportation',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-03T20:36:00.000Z',
    amount: -12,
    payee: {
      id: '9',
      payeeName: 'Gleichner, Lind and Olson, Ltd.',
      categoryId: '107',
      address: '142 Wune Street',
      city: 'Deetelu',
      state: 'WV',
      zip: '80587',
      image: '/images/animals/9.jpg',
      motto: 'Optimized executive frame',
      active: true,
      category: {
        id: '107',
        categoryName: 'Transportation',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '18',
    payeeId: '5',
    personId: '201',
    categoryId: '103',
    category: {
      id: '103',
      categoryName: 'Food',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-17T00:53:00.000Z',
    amount: -143.75,
    payee: {
      id: '5',
      payeeName: 'Shop-Rite Grocery Store',
      address: '311 St. Paul Ave.',
      city: 'Baltimore',
      state: 'MD',
      zip: '08697',
      categoryId: '103',
      image: null,
      motto: null,
      active: true,
      category: {
        id: '103',
        categoryName: 'Food',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '19',
    payeeId: '10',
    personId: '201',
    categoryId: '107',
    category: {
      id: '107',
      categoryName: 'Transportation',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-13T17:50:00.000Z',
    amount: -126.5,
    payee: {
      id: '10',
      payeeName: 'Klein Cars',
      address: '1939 Rolfs Pass',
      city: 'Baltimore',
      state: 'MD',
      zip: '97394',
      categoryId: '107',
      image: '/images/technics/4.jpg',
      motto: 'Seamless heuristic process improvement',
      active: true,
      category: {
        id: '107',
        categoryName: 'Transportation',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '20',
    payeeId: '24',
    personId: '201',
    categoryId: '101',
    category: {
      id: '101',
      categoryName: 'Clothing',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-02T18:32:00.000Z',
    amount: -8.25,
    payee: {
      id: '24',
      payeeName: 'Rodriguez Outfitting',
      categoryId: '101',
      address: '587 Ipobak Terrace',
      city: 'Alexandria',
      state: 'VA',
      zip: '16097',
      image: '/images/nature/6.jpg',
      motto: 'Operative maximized matrices',
      active: true,
      category: {
        id: '101',
        categoryName: 'Clothing',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '21',
    payeeId: '4',
    personId: '201',
    categoryId: '103',
    category: {
      id: '103',
      categoryName: 'Food',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-11T23:38:00.000Z',
    amount: -57.5,
    payee: {
      id: '4',
      payeeName: 'Acme Products, Inc',
      address: '1669 Divided Court',
      city: 'Cheyenne',
      state: 'WY',
      zip: '48324',
      categoryId: '103',
      image: null,
      motto: null,
      active: true,
      category: {
        id: '103',
        categoryName: 'Food',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '22',
    payeeId: '16',
    personId: '201',
    categoryId: '104',
    category: {
      id: '104',
      categoryName: 'Entertainment',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-25T23:27:00.000Z',
    amount: -51.75,
    payee: {
      id: '16',
      payeeName: 'Davis, Muller and Marvin',
      address: '319 Nazmo Road',
      city: 'Sohcutzeh',
      state: 'VT',
      zip: '09725',
      categoryId: '104',
      image: '/images/technics/1.jpg',
      motto: 'Persevering regional moratorium',
      active: true,
      category: {
        id: '104',
        categoryName: 'Entertainment',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '23',
    payeeId: '7',
    personId: '201',
    categoryId: '104',
    category: {
      id: '104',
      categoryName: 'Entertainment',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-11T21:44:00.000Z',
    amount: -34.5,
    payee: {
      id: '7',
      payeeName: 'Worthless Peon Productions',
      address: '125 Scrub Street',
      city: 'Santa Monica',
      state: 'CA',
      zip: '90111',
      categoryId: '104',
      image: null,
      motto: null,
      active: true,
      category: {
        id: '104',
        categoryName: 'Entertainment',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '24',
    payeeId: '26',
    personId: '201',
    categoryId: '108',
    category: {
      id: '108',
      categoryName: 'Cash',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-30T23:29:00.000Z',
    amount: -60,
    payee: {
      id: '26',
      payeeName: 'Cash Withdrawal',
      categoryId: '108',
      active: true,
      category: {
        id: '108',
        categoryName: 'Cash',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '25',
    payeeId: '6',
    personId: '201',
    categoryId: '103',
    category: {
      id: '103',
      categoryName: 'Food',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-17T19:12:00.000Z',
    amount: -46,
    payee: {
      id: '6',
      payeeName: 'Sushi Land',
      address: '808 Calvert St.',
      city: 'Baltimore',
      state: 'MD',
      zip: '01848',
      categoryId: '103',
      image: null,
      motto: null,
      active: true,
      category: {
        id: '103',
        categoryName: 'Food',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '26',
    payeeId: '18',
    personId: '201',
    categoryId: '102',
    category: {
      id: '102',
      categoryName: 'Housing',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-07T20:39:00.000Z',
    amount: -45,
    payee: {
      id: '18',
      payeeName: 'Watsica Design',
      address: '289 Vaewi Avenue',
      city: 'Dorgaec',
      state: 'WY',
      zip: '19966',
      categoryId: '102',
      image: '/images/business/5.jpg',
      motto: 'Streamlined full-range budgetary management',
      active: true,
      category: {
        id: '102',
        categoryName: 'Housing',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '27',
    payeeId: '25',
    personId: '201',
    categoryId: '101',
    category: {
      id: '101',
      categoryName: 'Clothing',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-18T20:23:00.000Z',
    amount: -6,
    payee: {
      id: '25',
      payeeName: 'Tower Shields',
      categoryId: '101',
      address: '289 Vaewi Avenue',
      city: 'Dorkachek',
      state: 'WY',
      zip: '19966',
      image: '/images/business/5.jpg',
      motto: 'Streamlined full-range budgetary management',
      active: true,
      category: {
        id: '101',
        categoryName: 'Clothing',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '28',
    payeeId: '15',
    personId: '201',
    categoryId: '103',
    category: {
      id: '103',
      categoryName: 'Food',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-31T00:47:00.000Z',
    amount: -40.25,
    payee: {
      id: '15',
      payeeName: 'Heathcote Inc',
      address: '798 Defarge Point',
      city: 'Tajuwbi',
      state: 'WI',
      zip: '88464',
      categoryId: '103',
      image: '/images/business/3.jpg',
      motto: 'Secured web-enabled Graphical Clothing Interface',
      active: true,
      category: {
        id: '103',
        categoryName: 'Food',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '29',
    payeeId: '13',
    personId: '201',
    categoryId: '104',
    category: {
      id: '104',
      categoryName: 'Entertainment',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-28T23:08:00.000Z',
    amount: -28.75,
    payee: {
      id: '13',
      payeeName: 'The Senator Theater',
      address: '1689 North York Rd',
      city: 'Baltimore',
      state: 'MD',
      zip: '48693',
      categoryId: '104',
      image: '/images/business/5.jpg',
      motto: 'Yesterday\'s movies tomorrow',
      active: true,
      category: {
        id: '104',
        categoryName: 'Entertainment',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '30',
    payeeId: '19',
    personId: '201',
    categoryId: '107',
    category: {
      id: '107',
      categoryName: 'Transportation',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-05T17:56:00.000Z',
    amount: -3.75,
    payee: {
      id: '19',
      payeeName: 'Wayne Enterprises',
      categoryId: '107',
      address: '319 Thomas Wayne Road',
      city: 'Gotham',
      state: 'NY',
      zip: '10939',
      image: '/images/technics/1.jpg',
      motto: 'Persevering regional moratorium',
      active: true,
      category: {
        id: '107',
        categoryName: 'Transportation',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '31',
    payeeId: '9',
    personId: '201',
    categoryId: '107',
    category: {
      id: '107',
      categoryName: 'Transportation',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-21T17:27:00.000Z',
    amount: -12,
    payee: {
      id: '9',
      payeeName: 'Gleichner, Lind and Olson, Ltd.',
      categoryId: '107',
      address: '142 Wune Street',
      city: 'Deetelu',
      state: 'WV',
      zip: '80587',
      image: '/images/animals/9.jpg',
      motto: 'Optimized executive frame',
      active: true,
      category: {
        id: '107',
        categoryName: 'Transportation',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '32',
    payeeId: '5',
    personId: '201',
    categoryId: '103',
    category: {
      id: '103',
      categoryName: 'Food',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-29T00:41:00.000Z',
    amount: -18.75,
    payee: {
      id: '5',
      payeeName: 'Shop-Rite Grocery Store',
      address: '311 St. Paul Ave.',
      city: 'Baltimore',
      state: 'MD',
      zip: '08697',
      categoryId: '103',
      image: null,
      motto: null,
      active: true,
      category: {
        id: '103',
        categoryName: 'Food',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '33',
    payeeId: '10',
    personId: '201',
    categoryId: '107',
    category: {
      id: '107',
      categoryName: 'Transportation',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-31T00:17:00.000Z',
    amount: -16.5,
    payee: {
      id: '10',
      payeeName: 'Klein Cars',
      address: '1939 Rolfs Pass',
      city: 'Baltimore',
      state: 'MD',
      zip: '97394',
      categoryId: '107',
      image: '/images/technics/4.jpg',
      motto: 'Seamless heuristic process improvement',
      active: true,
      category: {
        id: '107',
        categoryName: 'Transportation',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '34',
    payeeId: '24',
    personId: '201',
    categoryId: '101',
    category: {
      id: '101',
      categoryName: 'Clothing',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-11T18:08:00.000Z',
    amount: -8.25,
    payee: {
      id: '24',
      payeeName: 'Rodriguez Outfitting',
      categoryId: '101',
      address: '587 Ipobak Terrace',
      city: 'Alexandria',
      state: 'VA',
      zip: '16097',
      image: '/images/nature/6.jpg',
      motto: 'Operative maximized matrices',
      active: true,
      category: {
        id: '101',
        categoryName: 'Clothing',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '35',
    payeeId: '4',
    personId: '201',
    categoryId: '103',
    category: {
      id: '103',
      categoryName: 'Food',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-14T23:14:00.000Z',
    amount: -7.5,
    payee: {
      id: '4',
      payeeName: 'Acme Products, Inc',
      address: '1669 Divided Court',
      city: 'Cheyenne',
      state: 'WY',
      zip: '48324',
      categoryId: '103',
      image: null,
      motto: null,
      active: true,
      category: {
        id: '103',
        categoryName: 'Food',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '36',
    payeeId: '16',
    personId: '201',
    categoryId: '104',
    category: {
      id: '104',
      categoryName: 'Entertainment',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-18T23:44:00.000Z',
    amount: -6.75,
    payee: {
      id: '16',
      payeeName: 'Davis, Muller and Marvin',
      address: '319 Nazmo Road',
      city: 'Sohcutzeh',
      state: 'VT',
      zip: '09725',
      categoryId: '104',
      image: '/images/technics/1.jpg',
      motto: 'Persevering regional moratorium',
      active: true,
      category: {
        id: '104',
        categoryName: 'Entertainment',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '37',
    payeeId: '7',
    personId: '201',
    categoryId: '104',
    category: {
      id: '104',
      categoryName: 'Entertainment',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-13T16:02:00.000Z',
    amount: -4.5,
    payee: {
      id: '7',
      payeeName: 'Worthless Peon Productions',
      address: '125 Scrub Street',
      city: 'Santa Monica',
      state: 'CA',
      zip: '90111',
      categoryId: '104',
      image: null,
      motto: null,
      active: true,
      category: {
        id: '104',
        categoryName: 'Entertainment',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '38',
    payeeId: '26',
    personId: '201',
    categoryId: '108',
    category: {
      id: '108',
      categoryName: 'Cash',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-08T00:17:00.000Z',
    amount: -60,
    payee: {
      id: '26',
      payeeName: 'Cash Withdrawal',
      categoryId: '108',
      active: true,
      category: {
        id: '108',
        categoryName: 'Cash',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '39',
    payeeId: '6',
    personId: '201',
    categoryId: '103',
    category: {
      id: '103',
      categoryName: 'Food',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-20T21:31:00.000Z',
    amount: -46,
    payee: {
      id: '6',
      payeeName: 'Sushi Land',
      address: '808 Calvert St.',
      city: 'Baltimore',
      state: 'MD',
      zip: '01848',
      categoryId: '103',
      image: null,
      motto: null,
      active: true,
      category: {
        id: '103',
        categoryName: 'Food',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '40',
    payeeId: '18',
    personId: '201',
    categoryId: '102',
    category: {
      id: '102',
      categoryName: 'Housing',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-02T19:46:00.000Z',
    amount: -45,
    payee: {
      id: '18',
      payeeName: 'Watsica Design',
      address: '289 Vaewi Avenue',
      city: 'Dorgaec',
      state: 'WY',
      zip: '19966',
      categoryId: '102',
      image: '/images/business/5.jpg',
      motto: 'Streamlined full-range budgetary management',
      active: true,
      category: {
        id: '102',
        categoryName: 'Housing',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '41',
    payeeId: '25',
    personId: '201',
    categoryId: '101',
    category: {
      id: '101',
      categoryName: 'Clothing',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-23T20:16:00.000Z',
    amount: -6,
    payee: {
      id: '25',
      payeeName: 'Tower Shields',
      categoryId: '101',
      address: '289 Vaewi Avenue',
      city: 'Dorkachek',
      state: 'WY',
      zip: '19966',
      image: '/images/business/5.jpg',
      motto: 'Streamlined full-range budgetary management',
      active: true,
      category: {
        id: '101',
        categoryName: 'Clothing',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '42',
    payeeId: '15',
    personId: '201',
    categoryId: '103',
    category: {
      id: '103',
      categoryName: 'Food',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-03T21:29:00.000Z',
    amount: -40.25,
    payee: {
      id: '15',
      payeeName: 'Heathcote Inc',
      address: '798 Defarge Point',
      city: 'Tajuwbi',
      state: 'WI',
      zip: '88464',
      categoryId: '103',
      image: '/images/business/3.jpg',
      motto: 'Secured web-enabled Graphical Clothing Interface',
      active: true,
      category: {
        id: '103',
        categoryName: 'Food',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '43',
    payeeId: '13',
    personId: '201',
    categoryId: '104',
    category: {
      id: '104',
      categoryName: 'Entertainment',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-11T00:31:00.000Z',
    amount: -28.75,
    payee: {
      id: '13',
      payeeName: 'The Senator Theater',
      address: '1689 North York Rd',
      city: 'Baltimore',
      state: 'MD',
      zip: '48693',
      categoryId: '104',
      image: '/images/business/5.jpg',
      motto: 'Yesterday\'s movies tomorrow',
      active: true,
      category: {
        id: '104',
        categoryName: 'Entertainment',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '44',
    payeeId: '19',
    personId: '201',
    categoryId: '107',
    category: {
      id: '107',
      categoryName: 'Transportation',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-10T19:03:00.000Z',
    amount: -28.75,
    payee: {
      id: '19',
      payeeName: 'Wayne Enterprises',
      categoryId: '107',
      address: '319 Thomas Wayne Road',
      city: 'Gotham',
      state: 'NY',
      zip: '10939',
      image: '/images/technics/1.jpg',
      motto: 'Persevering regional moratorium',
      active: true,
      category: {
        id: '107',
        categoryName: 'Transportation',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '45',
    payeeId: '9',
    personId: '201',
    categoryId: '107',
    category: {
      id: '107',
      categoryName: 'Transportation',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-17T00:45:00.000Z',
    amount: -12,
    payee: {
      id: '9',
      payeeName: 'Gleichner, Lind and Olson, Ltd.',
      categoryId: '107',
      address: '142 Wune Street',
      city: 'Deetelu',
      state: 'WV',
      zip: '80587',
      image: '/images/animals/9.jpg',
      motto: 'Optimized executive frame',
      active: true,
      category: {
        id: '107',
        categoryName: 'Transportation',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '46',
    payeeId: '5',
    personId: '201',
    categoryId: '103',
    category: {
      id: '103',
      categoryName: 'Food',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-16T20:03:00.000Z',
    amount: -18.75,
    payee: {
      id: '5',
      payeeName: 'Shop-Rite Grocery Store',
      address: '311 St. Paul Ave.',
      city: 'Baltimore',
      state: 'MD',
      zip: '08697',
      categoryId: '103',
      image: null,
      motto: null,
      active: true,
      category: {
        id: '103',
        categoryName: 'Food',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '47',
    payeeId: '10',
    personId: '201',
    categoryId: '107',
    category: {
      id: '107',
      categoryName: 'Transportation',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-28T00:54:00.000Z',
    amount: -126.5,
    payee: {
      id: '10',
      payeeName: 'Klein Cars',
      address: '1939 Rolfs Pass',
      city: 'Baltimore',
      state: 'MD',
      zip: '97394',
      categoryId: '107',
      image: '/images/technics/4.jpg',
      motto: 'Seamless heuristic process improvement',
      active: true,
      category: {
        id: '107',
        categoryName: 'Transportation',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '48',
    payeeId: '24',
    personId: '201',
    categoryId: '101',
    category: {
      id: '101',
      categoryName: 'Clothing',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-11T21:46:00.000Z',
    amount: -63.25,
    payee: {
      id: '24',
      payeeName: 'Rodriguez Outfitting',
      categoryId: '101',
      address: '587 Ipobak Terrace',
      city: 'Alexandria',
      state: 'VA',
      zip: '16097',
      image: '/images/nature/6.jpg',
      motto: 'Operative maximized matrices',
      active: true,
      category: {
        id: '101',
        categoryName: 'Clothing',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  },
  {
    id: '49',
    payeeId: '4',
    personId: '201',
    categoryId: '103',
    category: {
      id: '103',
      categoryName: 'Food',
      categoryType: 'expense'
    },
    accountId: '1',
    txType: '2',
    txDate: '2016-07-29T18:03:00.000Z',
    amount: -7.5,
    payee: {
      id: '4',
      payeeName: 'Acme Products, Inc',
      address: '1669 Divided Court',
      city: 'Cheyenne',
      state: 'WY',
      zip: '48324',
      categoryId: '103',
      image: null,
      motto: null,
      active: true,
      category: {
        id: '103',
        categoryName: 'Food',
        categoryType: 'expense'
      }
    },
    person: {
      firstName: 'Jenny',
      lastName: 'Sparks',
      gender: 'female',
      dateOfBirth: '1995-01-01',
      id: '201',
      address: {
        street: '47 Kuhlman Place',
        city: 'New Queensborough',
        state: 'NV',
        zip: '90498-1073'
      }
    },
    account: {
      id: '1',
      personId: '201',
      accountTypeId: '1',
      startingBalance: 1000,
      person: {
        firstName: 'Jenny',
        lastName: 'Sparks',
        gender: 'female',
        dateOfBirth: '1995-01-01',
        id: '201',
        address: {
          street: '47 Kuhlman Place',
          city: 'New Queensborough',
          state: 'NV',
          zip: '90498-1073'
        }
      },
      accountType: {
        id: '1',
        accountTypeName: 'Checking',
        interestRate: 0
      },
      accountName: 'Checking'
    },
    txTypeName: 'Debit'
  }

];

const data: ClassDataMapped = {
  accounts,
  categories,
  payees,
  people,
  tx
};

export { accounts, categories, payees, people, tx, data };
