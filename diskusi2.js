var user = [
    {
      name: "Leta Dickinson",
      age: 17,
      gender: "female",
      nationality: "Philippines",
    },
    {
      name: "Jodie Hermann Sr.",
      age: 30,
      gender: "male",
      nationality: "Germany",
    },
    { name: "Alice Hessel", age: 18, gender: "female", nationality: "Samoa" },
    { name: "Ahmad Monahan", age: 7, gender: "male", nationality: "Morocco" },
    {
      name: "Ms. Carter Dach",
      age: 28,
      gender: "female",
      nationality: "Belgium",
    },
  ];

  const newUser = user.filter((user) => user.age >= 18)
  

  console.log (newUser)