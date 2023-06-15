function displayProperty(person, des){
    if (person[des] == null){
        console.log(`Property ${des} does not exist in the object.`)
    }else
        console.log(`${des}: ${person[des]}`);
}
