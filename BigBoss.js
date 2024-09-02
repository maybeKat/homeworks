const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
              }
            ]
          }
        ]
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ]
  };

function findValueByKey(companyName) {
    function findInfo(partners) {
        for (let i in partners) {
            if (companyName === partners[i].name) {
                return partners[i];
            }
    
            let found = findInfo(partners[i].partners)
            if (found) {
                return found;
            }
        }
        return null;
    }

    return findInfo(company.clients); 
}

console.log(findValueByKey('Клієнт 1.2.3'));


// перший варіант вирішення задачі до того як прочитала умову, що об'єкт може ставати ще глибшим
// function _findValueByKey(companyName) {
//     for (let i in company.clients)  {
//         if (companyName === company.clients[i].name) {
//             return company.clients[i]
//         } 
//         for (let j in company.clients[i].partners) {
//             if (companyName === company.clients[i].partners[j].name) {
//                 return company.clients[i].partners[j]
//             }
//             for (let k in company.clients[i].partners[j].partners) {
//                 if (companyName === company.clients[i].partners[j].partners[k].name) {
//                   return company.clients[i].partners[j].partners[k]
//                 }
//             }
//         }
//     }
//     return null;
// }


