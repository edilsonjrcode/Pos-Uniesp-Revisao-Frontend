const companies = [
  {
    name: 'Amazon',
    founded: 1994,
    industry: ['E-Commerce', 'Cloud'],
  },
  {
    name: 'Facebook',
    founded: 2004,
    industry: ['Social'],
  },
  {
    name: 'Alphabet Inc.',
    founded: 2015,
    industry: ['Search', 'Cloud', 'Advertising'],
  },
];


companies.forEach(company => (company['kind'] = "Internet company"))

show = (companies) => {

    MAX_LENGTH = ''

    companies.forEach(company => {

        console.log(company['name'] +" "+ company['founded'])

    })

}

show(companies)