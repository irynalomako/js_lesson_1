let data = (users) => {for (const user of users) {document.write(`<div> ${user.id} ${user.name} ${user.age} </div>`);}}

    data ([{id: 'Noname', name: 'Alex_1', age: 18},
    {id: 'Noname', name: 'Alex_2', age: 19},
    {id: 'Noname', name: 'Alex_3', age: 20}]);