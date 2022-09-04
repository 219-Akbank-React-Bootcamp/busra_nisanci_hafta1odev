const obj = {
  cols: ["Name Surname", "Company", "Email", "Date", "Country", "City"],
  data: [
    [
      "Hyacinth Vincent",
      "Duis Corporation",
      "iaculis.enim@magnaCrasconvallis.ca",
      "28/06/2022",
      "Eritrea",
      "Lyubertsy",
    ],
    [
      "Brenden Martinez",
      "Volutpat Nunc Associates",
      "iaculis@estMauris.org",
      "24/03/2021",
      "British Indian Ocean Territory",
      "Colwood",
    ],
  ],
};

const regenerateObj = obj.data.reduce((prev, current) => {
  const innerObj = current.reduce((innerPrev, innerCurrent, index) => {
    return { ...innerPrev, [obj.cols[index]]: innerCurrent };
  }, {});
  return [...prev, innerObj];
}, []);

console.log(regenerateObj);
