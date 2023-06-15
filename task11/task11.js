function sortByProperty(persons, des){
    persons.sort(function(a, b){return a[des] - b[des]});
    return persons;
}
