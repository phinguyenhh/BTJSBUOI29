export let filterList = "All";

export const getListByFilter = (listPerson, filter) => {
  if (filter == "All"){
    filterList = "All"  
    return listPerson.mang;
  }
  filterList = filter;
  const newListPerson = listPerson.mang.filter((person) => {
    return person.type === filter;
  });
  return newListPerson;
};
