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

const show = (companies) => {

  const maxNameLength = Math.max(...companies.map(company => company.name.length));
  
  return companies
    .map(company => company.name.padEnd(maxNameLength + 3, '.') + company.founded)
    .join('\n');
}

console.log(show(companies))