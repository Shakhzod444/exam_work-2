// */ ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let successful = [];

let unSuccessful = [];

let taxes = Number;

let taxesMax = {};

let taxesMin = {};

// *// Реальные данные 2021*

let bank = [
   {
      name: "Apple",

      budget: 1000000,

      tax: 28,

      expensesPerYear: [
         { title: "Salaries", total: 125000 },

         { title: "Utilites", total: 18000 },

         { title: "Rent", total: 258000 },
      ],
   },

   {
      name: "Microsoft",

      budget: 988000,

      tax: 21,

      expensesPerYear: [
         {
            title: "Salaries",

            total: 148000,
         },

         {
            title: "Utilites",

            total: 124000,
         },

         {
            title: "Rent",

            total: 314000,
         },
      ],
   },

   {
      name: "HP",

      budget: 609000,

      tax: 14,

      expensesPerYear: [
         {
            title: "Salaries",

            total: 414000,
         },

         {
            title: "Utilites",

            total: 19000,
         },

         {
            title: "Rent",

            total: 114400,
         },
      ],
   },

   {
      name: "Xiomi",

      budget: 889500,

      tax: 17,

      expensesPerYear: [
         {
            title: "Salaries",

            total: 318000,
         },

         {
            title: "Utilites",

            total: 14000,
         },

         {
            title: "Rent",

            total: 169000,
         },
      ],
   },

   {
      name: "Samsung",

      budget: 889500,

      tax: 12,

      expensesPerYear: [
         {
            title: "Salaries",

            total: 650400,
         },

         {
            title: "Utilites",

            total: 29000,
         },

         {
            title: "Rent",

            total: 212000,
         },
      ],
   },
];

// 1. Высчитать месячные траты, создав ключ expensesPerMonth в объектах*

// 2. Высчитать отношение трат в месяц к месячному бюджету в процентах, создав ключ procent в объектах. Например компания в месяц зарабатывает 100,000, а тратит 25,000, значит ее ключ procent = 25%*

// 3. Сохранить successful и unsuccessful и добавить туда фирмы, вычитав налог tax*

// 4. Сохранить в переменной taxes общее количество налогов со всех компаний. Например все платят по 20,000 в месяц. В итоге taxes = 100,000*

// // 5. Сохранить в переменных taxesMax и taxesMin те, компанию которая больше и меньше всех платит налоги*

// // 6. Добавить ключ totalMoney в каждой компании. Эта переменная показывает сколько в итоге осталось денег в компании после вычета всех налогов и трат*

// // * Писать весь код в функции setup()*

// // ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*


let i = []
const setup = (a) => {
   taxes = 0

   for (let item of a) {
      item.expensesPerMonth = 0
      item.procent_Exp_Permonth = 0
      item.total_money = 0

      for (let item2 of item.expensesPerYear) {
         // 1 задание 
         item.expensesPerMonth += Math.round(item2.total / 12)
      }
      // 2 задание 
      item.procent_Exp_Permonth = Math.round(item.expensesPerMonth * 100 / (item.budget / 12))
      // 3  задание 
      let kompany_tax = Math.round(((item.budget / 12) - item.expensesPerMonth) - (item.budget / 100) - item.tax)
      if (kompany_tax >= 0) {
         successful.push(item)
      } else {
         unSuccessful.push(item)
      }
      // 4 pflfybt 


      // 5 задание 
      item.tax_exp_permonth = Math.round((item.tax * item.budget / 100) / 12)
      i.push(item.tax_exp_permonth)


      // 6 задание 
      item.total_money = kompany_tax

   }

   let max = Math.max(...i)
   let min = Math.min(...i)

   taxesMax = bank.find(item => item.tax_exp_permonth === max)
   taxesMin = bank.find(item => item.tax_exp_permonth === min)

   taxes = i.reduce((a, b) => a + b)

}
setup(bank);

console.table(bank);

console.log('successful ');
console.log(successful);

console.log('unSuccessful ');
console.log(unSuccessful);

console.log('Сумма налога ' + taxes);

console.log('taxesMax');
console.log(taxesMax);

console.log('taxesMin');
console.log(taxesMin);

console.log();