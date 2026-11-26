const employees = [
  { id: 1, name: "Usman", department: "IT", salary: 120000, experience: 6, skills: ["JavaScript", "React", "Node"], rating: 4.6 },
  { id: 2, name: "Fatima", department: "HR", salary: 70000, experience: 3, skills: ["Recruitment", "Communication"], rating: 4.2 },
  { id: 3, name: "Ahmed", department: "IT", salary: 90000, experience: 1, skills: ["JavaScript", "Python"], rating: 3.7 },
  { id: 4, name: "Zainab", department: "Finance", salary: 110000, experience: 8, skills: ["Excel", "Accounting"], rating: 4.8 },
  { id: 5, name: "Omar", department: "Finance", salary: 65000, experience: 2, skills: ["Excel", "Communication"], rating: 3.4 },
  { id: 6, name: "Hira", department: "IT", salary: 85000, experience: 4, skills: ["Python", "React"], rating: 4.1 }
];

// 1. Monthly salary × 12
function getAnnualSalary(employee) {
  return employee.salary * 12;
}

// 2. ID se employee dhoondo
function getEmployeeById(employees, id) {
  return employees.find(e => e.id === id) || "Employee not found";
}

// 3. Experience ke hisaab se level (bada check pehle)
function getLevel(employee) {
  if (employee.experience >= 5) return "Senior";
  if (employee.experience >= 2) return "Mid";
  return "Junior";
}

// 4. Sab se zyada salary wale ka naam
function getHighestPaid(employees) {
  return employees.reduce((top, e) => (e.salary > top.salary ? e : top)).name;
}

// 5. Department ke hisaab se names group karo
function groupByDepartment(employees) {
  return employees.reduce((groups, e) => {
    (groups[e.department] ||= []).push(e.name);
    return groups;
  }, {});
}

// 6. Sab ki monthly salary ka total
function getTotalSalary(employees) {
  return employees.reduce((sum, e) => sum + e.salary, 0);
}

// 7. Jin employees ke paas yeh skill hai unke names
function getEmployeesWithSkill(employees, skill) {
  return employees.filter(e => e.skills.includes(skill)).map(e => e.name);
}

// 8. Bonus add karo: rating 4 ya zyada => 10%, warna 5%
function addBonus(employees) {
  return employees.map(e => ({
    ...e,
    bonus: e.salary * (e.rating >= 4 ? 0.10 : 0.05)
  }));
}

// 9. Har level ke employees ginno
function countByLevel(employees) {
  return employees.reduce((count, e) => {
    const level = getLevel(e);
    count[level]++;
    return count;
  }, { Senior: 0, Mid: 0, Junior: 0 });
}

// 10. Naya skill add karo — naya object, original same; duplicate add na ho
function addSkill(employee, skill) {
  if (employee.skills.includes(skill)) return { ...employee, skills: [...employee.skills] };
  return { ...employee, skills: [...employee.skills, skill] };
}

// ---------- Test ----------
console.log("getAnnualSalary(Usman):", getAnnualSalary(employees[0]));
console.log("getEmployeeById(4):", getEmployeeById(employees, 4).name);
console.log("getEmployeeById(99):", getEmployeeById(employees, 99));
console.log("getLevel:", employees.map(e => `${e.name}: ${getLevel(e)}`));
console.log("getHighestPaid:", getHighestPaid(employees));
console.log("groupByDepartment:", groupByDepartment(employees));
console.log("getTotalSalary:", getTotalSalary(employees));
console.log("getEmployeesWithSkill(React):", getEmployeesWithSkill(employees, "React"));
console.log("addBonus:", addBonus(employees).map(e => `${e.name}: ${e.bonus}`));
console.log("countByLevel:", countByLevel(employees));

const updated = addSkill(employees[2], "React");
console.log("addSkill(Ahmed, React):", updated.skills);
console.log("original unchanged:", employees[2].skills);
console.log("duplicate skipped:", addSkill(employees[2], "Python").skills);
