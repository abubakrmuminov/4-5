// 1-masala  
// Zafarjon o'zini "Dasturchilar shohi" deb ataydi, lekin u ro'yhatdan faqat erkaklarni ajratib olishni bilmaydi, ahmoq! рџ¤Ў  
// Modul sifatida logika yozing  
export function filterByGender(people, gender) {  
    return people.filter(person => person.gender === gender);
}  
const people1 = [  
    { name: "Fotima", gender: "female", id: 1 },  
    { name: "Aziz", gender: "male", id: 4 },  
    { name: "Zuhra", gender: "female", id: 2 },  
    { name: "Ali", gender: "male", id: 3 },  
];  
const result1 = filterByGender(people1, "male");  
console.log("1-masala natijasi:", result1);  
// Savollar:  
// 1. Zafarjon "erkaklar" ni ajratib olish uchun arraydagi har bir obyektni qanday tekshirishi kerak?  
// 2. Array metodlaridan qaysi biri bu yerda yordam beradi? filter() haqida o'ylab ko'rdingizmi?  
// 3. Agar Zafarjon yana xato qilsa, uni qanday "troll" qilgan bo'lardingiz? рџ„  

// 2-masala  
// Dilnoza "Men pro dasturchiman!" dedi-da, yangi talaba qo'shmoqchi bo'lib, o'rniga ro'yhatni bo'shatib qo'ydi! рџ¤¦вЂЌв™ЂпёЏ  
// Modul sifatida logika yozing  
export function addNewPerson(people, newPerson) {  
    return people.concat([newPerson])
}  
const people2 = [  
    { name: "Fotima", gender: "female", id: 1 },  
    { name: "Aziz", gender: "male", id: 4 },  
    { name: "Zuhra", gender: "female", id: 2 },  
];  
const newPerson2 = { name: "Jamshid", gender: "male", id: 5 };  
const result2 = addNewPerson(people2, newPerson2);  
console.log("2-masala natijasi:", result2);  
// Savollar:  
// 1. Dilnoza yangi talaba qo'shish uchun arrayga nima qilishi kerak? push() metodi haqida o'yladingizmi?  
// 2. Agar arrayni o'zgartirmasdan yangi ro'yhat yaratish kerak bo'lsa, qanday yo'l tutasiz?  
// 3. Dilnoza yana xato qilsa, uni qanday kulgan bo'lardingiz? рџ‚  

// 3-masala  
// Husniddin "Men hamma narsani bilaman!" dedi, lekin talabani o'chirish o'rniga butun ro'yhatni o'chirib tashladi! рџ…  
// Modul sifatida logika yozing  
export function deletePerson(people, id) {  
    // Logika yozing  
}  
const people3 = [  
    { name: "Fotima", gender: "female", id: 1 },  
    { name: "Aziz", gender: "male", id: 4 },  
    { name: "Zuhra", gender: "female", id: 2 },  
];  
const result3 = deletePerson(people3, 4);  
console.log("3-masala natijasi:", result3);  
// Savollar:  
// 1. Husniddin ma'lum bir id bo'yicha talabani qanday o'chirishi mumkin? filter() yoki splice() haqida o'yladingizmi?  
// 2. Agar id topilmasa, nima qilish kerak?  
// 3. Husniddin yana xato qilsa, uni qanday masxara qilgan bo'lardingiz? рџ¤Ў  

// 4-masala  
// Sevinch "Ism o'zgartirish oson!" dedi, lekin u ism o'rniga jinsni o'zgartirib qo'ydi, qizaloq! рџ‚  
// Modul sifatida logika yozing  
export function updatePersonName(people, id, newName) {  
    // Logika yozing  
}  
const people4 = [  
    { name: "Fotima", gender: "female", id: 1 },  
    { name: "Aziz", gender: "male", id: 4 },  
    { name: "Zuhra", gender: "female", id: 2 },  
];  
const result4 = updatePersonName(people4, 1, "FotimaXon");  
console.log("4-masala natijasi:", result4);  
// Savollar:  
// 1. Sevinch ma'lum bir id bo'yicha ismni qanday yangilashi mumkin? map() yoki forEach() haqida o'yladingizmi?  
// 2. Agar id topilmasa, nima qilish kerak?  
// 3. Sevinchning xatosini ko'rib, uni qanday kulgan bo'lardingiz? рџ„  

// 5-masala  
// Nodir "Men faqat ayollarni ko'raman!" dedi, lekin u erkaklarni ham ko'rsatib qo'ydi, shoshib qolgan ekan! рџ¤¦вЂЌв™‚пёЏ  
// Modul sifatida logika yozing  
export function filterFemales(people) {  
    // Logika yozing  
}  
const people5 = [  
    { name: "Fotima", gender: "female", id: 1 },  
    { name: "Aziz", gender: "male", id: 4 },  
    { name: "Zuhra", gender: "female", id: 2 },  
];  
const result5 = filterFemales(people5);  
console.log("5-masala natijasi:", result5);  
// Savollar:  
// 1. Nodir faqat ayollarni qanday filter qilishi mumkin? filter() metodidan qanday foydalanasiz?  
// 2. Agar ro'yhat bo'sh bo'lsa, nima qilish kerak?  
// 3. Nodirning shoshqaloqligini ko'rib, uni qanday masxara qilgan bo'lardingiz? рџ‚  

// 6-masala  
// Shohruh "Men ayol qo'shaman!" dedi, lekin u erkak qo'shib qo'ydi, ahmoqona xato! рџ¤Ў  
// Modul sifatida logika yozing  
export function addFemalePerson(people, newPerson) {  
    // Logika yozing  
}  
const people6 = [  
    { name: "Fotima", gender: "female", id: 1 },  
    { name: "Aziz", gender: "male", id: 4 },  
    { name: "Zuhra", gender: "female", id: 2 },  
];  
const newPerson6 = { name: "Laylo", gender: "female", id: 5 };  
const result6 = addFemalePerson(people6, newPerson6);  
console.log("6-masala natijasi:", result6);  
// Savollar:  
// 1. Shohruh yangi ayol qo'shishdan oldin jinsni qanday tekshirishi mumkin?  
// 2. Agar jins "female" bo'lmasa, qanday xabar qaytarish mumkin?  
// 3. Shohruhning xatosini ko'rib, uni qanday kulgan bo'lardingiz? рџ…  

// 7-masala  
// Malika "Men 2-idni o'chiraman!" dedi, lekin u 1-idni o'chirib yubordi, qizaloq shoshibdi! рџ‚  
// Modul sifatida logika yozing  
export function deleteById(people, id) {  
    // Logika yozing  
}  
const people7 = [  
    { name: "Fotima", gender: "female", id: 1 },  
    { name: "Aziz", gender: "male", id: 4 },  
    { name: "Zuhra", gender: "female", id: 2 },  
];  
const result7 = deleteById(people7, 2);  
console.log("7-masala natijasi:", result7);  
// Savollar:  
// 1. Malika ma'lum bir id bo'yicha talabani qanday o'chirishi mumkin?  
// 2. Agar id topilmasa, qanday xabar qaytarish mumkin?  
// 3. Malikani shoshqaloqligi uchun qanday masxara qilgan bo'lardingiz? рџ„  

// 8-masala  
// Javohir "Men jinsni o'zgartiraman!" dedi, lekin u id ni unutdi, shoshib qolgan ekan! рџ¤¦вЂЌв™‚пёЏ  
// Modul sifatida logika yozing  
export function updateGender(people, id, newGender) {  
    // Logika yozing  
}  
const people8 = [  
    { name: "Fotima", gender: "female", id: 1 },  
    { name: "Aziz", gender: "male", id: 4 },  
    { name: "Zuhra", gender: "female", id: 2 },  
];  
const result8 = updateGender(people8, 4, "female");  
console.log("8-masala natijasi:", result8);  
// Savollar:  
// 1. Javohir ma'lum bir id bo'yicha jinsni qanday yangilashi mumkin?  
// 2. Agar jins noto'g'ri kiritilsa, qanday tekshirish mumkin?  
// 3. Javohirning unutuvchanligini ko'rib, uni qanday kulgan bo'lardingiz? рџ‚  

// 9-masala  
// Oybek "Men erkaklarni ko'raman!" dedi, lekin u ayollarni ham ko'rsatib qo'ydi, ahmoq! рџ¤Ў  
// Modul sifatida logika yozing  
export function filterMales(people) {  
    // Logika yozing  
}  
const people9 = [  
    { name: "Fotima", gender: "female", id: 1 },  
    { name: "Aziz", gender: "male", id: 4 },  
    { name: "Zuhra", gender: "female", id: 2 },  
];  
const result9 = filterMales(people9);  
console.log("9-masala natijasi:", result9);  
// Savollar:  
// 1. Oybek faqat erkaklarni qanday filter qilishi mumkin?  
// 2. Agar ro'yhatda erkaklar bo'lmasa, nima qilish kerak?  
// 3. Oybekning xatosini ko'rib, uni qanday masxara qilgan bo'lardingiz? рџ…  

// 10-masala  
// Farhod "Men yangi odam qo'shaman!" dedi, lekin u ikki marta qo'shib qo'ydi, shoshibdi! рџ‚  
// Modul sifatida logika yozing  
export function addUniquePerson(people, newPerson) {  
    // Logika yozing  
}  
const people10 = [  
    { name: "Fotima", gender: "female", id: 1 },  
    { name: "Aziz", gender: "male", id: 4 },  
    { name: "Zuhra", gender: "female", id: 2 },  
];  
const newPerson10 = { name: "Sardor", gender: "male", id: 5 };  
const result10 = addUniquePerson(people10, newPerson10);  
console.log("10-masala natijasi:", result10);  
// Savollar:  
// 1. Farhod takrorlanishni oldini olish uchun id ni qanday tekshirishi mumkin?  
// 2. Agar id allaqachon mavjud bo'lsa, qanday xabar qaytarish mumkin?  
// 3. Farhodning shoshqaloqligini ko'rib, uni qanday kulgan bo'lardingiz? рџ„  

// 11-masala  
// Nigina "Men ism bo'yicha qidiraman!" dedi, lekin u jins bo'yicha qidirib qo'ydi, qizaloq! рџ¤¦вЂЌв™ЂпёЏ  
// Modul sifatida logika yozing  
export function findByName(people, name) {  
    // Logika yozing  
}  
const people11 = [  
    { name: "Fotima", gender: "female", id: 1 },  
    { name: "Aziz", gender: "male", id: 4 },  
    { name: "Zuhra", gender: "female", id: 2 },  
];  
const result11 = findByName(people11, "Fotima");  
console.log("11-masala natijasi:", result11);  
// Savollar:  
// 1. Nigina ism bo'yicha qanday qidirishi mumkin? find() yoki filter() haqida o'yladingizmi?  
// 2. Agar ism topilmasa, qanday xabar qaytarish mumkin?  
// 3. Niginaning xatosini ko'rib, uni qanday kulgan bo'lardingiz? рџ‚  

// 12-masala  
// Asadbek "Men jins bo'yicha qidiraman!" dedi, lekin u ism bo'yicha qidirib qo'ydi, shoshibdi! рџ¤Ў  
// Modul sifatida logika yozing  
export function findByGender(people, gender) {  
    // Logika yozing  
}  
const people12 = [  
    { name: "Fotima", gender: "female", id: 1 },  
    { name: "Aziz", gender: "male", id: 4 },  
    { name: "Zuhra", gender: "female", id: 2 },  
];  
const result12 = findByGender(people12, "male");  
console.log("12-masala natijasi:", result12);  
// Savollar:  
// 1. Asadbek jins bo'yicha qanday qidirishi mumkin?  
// 2. Agar hech kim topilmasa, qanday xabar qaytarish mumkin?  
// 3. Asadbekning shoshqaloqligini ko'rib, uni qanday masxara qilgan bo'lardingiz? рџ…  

// 13-masala  
// Mohira "Men id bo'yicha o'chiraman!" dedi, lekin u ism bo'yicha o'chirib qo'ydi, ahmoqona xato! рџ‚  
// Modul sifatida logika yozing  
export function deleteByIdCorrectly(people, id) {  
    // Logika yozing  
}  
const people13 = [  
    { name: "Fotima", gender: "female", id: 1 },  
    { name: "Aziz", gender: "male", id: 4 },  
    { name: "Zuhra", gender: "female", id: 2 },  
];  
const result13 = deleteByIdCorrectly(people13, 1);  
console.log("13-masala natijasi:", result13);  
// Savollar:  
// 1. Mohira id bo'yicha qanday o'chirishi mumkin?  
// 2. Agar id topilmasa, qanday xabar qaytarish mumkin?  
// 3. Mohiraning xatosini ko'rib, uni qanday kulgan bo'lardingiz? рџ„  

// 14-masala  
// Farrux "Men ismni yangilayman!" dedi, lekin u jinsni yangilab qo'ydi, shoshibdi! рџ¤¦вЂЌв™‚пёЏ  
// Modul sifatida logika yozing  
export function updateNameCorrectly(people, id, newName) {  
    // Logika yozing  
}  
const people14 = [  
    { name: "Fotima", gender: "female", id: 1 },  
    { name: "Aziz", gender: "male", id: 4 },  
    { name: "Zuhra", gender: "female", id: 2 },  
];  
const result14 = updateNameCorrectly(people14, 2, "ZuhraXon");  
console.log("14-masala natijasi:", result14);  
// Savollar:  
// 1. Farrux ismni qanday yangilashi mumkin?  
// 2. Agar id topilmasa, qanday xabar qaytarish mumkin?  
// 3. Farruxning shoshqaloqligini ko'rib, uni qanday masxara qilgan bo'lardingiz? рџ‚  

// 15-masala  
// Gulnoza "Men faqat ayollarni ko'raman!" dedi, lekin u erkaklarni ham ko'rsatib qo'ydi, qizaloq! рџ¤Ў  
// Modul sifatida logika yozing  
export function filterFemalesOnly(people) {  
    // Logika yozing  
}  
const people15 = [  
    { name: "Fotima", gender: "female", id: 1 },  
    { name: "Aziz", gender: "male", id: 4 },  
    { name: "Zuhra", gender: "female", id: 2 },  
];  
const result15 = filterFemalesOnly(people15);  
console.log("15-masala natijasi:", result15);  
// Savollar:  
// 1. Gulnoza faqat ayollarni qanday filter qilishi mumkin?  
// 2. Agar ro'yhatda ayollar bo'lmasa, qanday xabar qaytarish mumkin?  
// 3. Gulnozani xatosini ko'rib, uni qanday kulgan bo'lardingiz? рџ…  

// 16-masala  
// Eldor "Men yangi odam qo'shaman!" dedi, lekin u id ni takrorlab qo'ydi, ahmoq! рџ‚  
// Modul sifatida logika yozing  
export function addPersonNoDuplicate(people, newPerson) {  
    // Logika yozing  
}  
const people16 = [  
    { name: "Fotima", gender: "female", id: 1 },  
    { name: "Aziz", gender: "male", id: 4 },  
    { name: "Zuhra", gender: "female", id: 2 },  
];  
const newPerson16 = { name: "Sardor", gender: "male", id: 4 };  
const result16 = addPersonNoDuplicate(people16, newPerson16);  
console.log("16-masala natijasi:", result16);  
// Savollar:  
// 1. Eldor id ni qanday tekshirishi mumkin?  
// 2. Agar id takrorlansa, qanday xabar qaytarish mumkin?  
// 3. Eldorning xatosini ko'rib, uni qanday masxara qilgan bo'lardingiz? рџ„  

// 17-masala  
// Shaxzoda "Men jinsni yangilayman!" dedi, lekin u ismni yangilab qo'ydi, shoshibdi! рџ¤¦вЂЌв™ЂпёЏ  
// Modul sifatida logika yozing  
export function updateGenderCorrectly(people, id, newGender) {  
    // Logika yozing  
}  
const people17 = [  
    { name: "Fotima", gender: "female", id: 1 },  
    { name: "Aziz", gender: "male", id: 4 },  
    { name: "Zuhra", gender: "female", id: 2 },  
];  
const result17 = updateGenderCorrectly(people17, 1, "male");  
console.log("17-masala natijasi:", result17);  
// Savollar:  
// 1. Shaxzoda jinsni qanday yangilashi mumkin?  
// 2. Agar jins noto'g'ri kiritilsa, qanday tekshirish mumkin?  
// 3. Shaxzodani shoshqaloqligi uchun qanday kulgan bo'lardingiz? рџ‚  

// 18-masala  
// Bekzod "Men ism bo'yicha qidiraman!" dedi, lekin u id bo'yicha qidirib qo'ydi, ahmoqona xato! рџ¤Ў  
// Modul sifatida logika yozing  
export function findByNameCorrectly(people, name) {  
    // Logika yozing  
}  
const people18 = [  
    { name: "Fotima", gender: "female", id: 1 },  
    { name: "Aziz", gender: "male", id: 4 },  
    { name: "Zuhra", gender: "female", id: 2 },  
];  
const result18 = findByNameCorrectly(people18, "Aziz");  
console.log("18-masala natijasi:", result18);  
// Savollar:  
// 1. Bekzod ism bo'yicha qanday qidirishi mumkin?  
// 2. Agar ism topilmasa, qanday xabar qaytarish mumkin?  
// 3. Bekzodning xatosini ko'rib, uni qanday masxara qilgan bo'lardingiz? рџ…  

// 19-masala  
// Madina "Men faqat erkaklarni ko'raman!" dedi, lekin u ayollarni ham ko'rsatib qo'ydi, qizaloq! рџ‚  
// Modul sifatida logika yozing  
export function filterMalesOnly(people) {  
    // Logika yozing  
}  
const people19 = [  
    { name: "Fotima", gender: "female", id: 1 },  
    { name: "Aziz", gender: "male", id: 4 },  
    { name: "Zuhra", gender: "female", id: 2 },  
];  
const result19 = filterMalesOnly(people19);  
console.log("19-masala natijasi:", result19);  
// Savollar:  
// 1. Madina faqat erkaklarni qanday filter qilishi mumkin?  
// 2. Agar ro'yhatda erkaklar bo'lmasa, qanday xabar qaytarish mumkin?  
// 3. Madinani xatosini ko'rib, uni qanday kulgan bo'lardingiz? рџ„  

// 20-masala  
// Ulug'bek "Men yangi odam qo'shaman!" dedi, lekin u jinsni noto'g'ri kiritib qo'ydi, shoshibdi! рџ¤¦вЂЌв™‚пёЏ  
// Modul sifatida logika yozing  
export function addPersonWithGenderCheck(people, newPerson) {  
    // Logika yozing  
}  
const people20 = [  
    { name: "Fotima", gender: "female", id: 1 },  
    { name: "Aziz", gender: "male", id: 4 },  
    { name: "Zuhra", gender: "female", id: 2 },  
];  
const newPerson20 = { name: "Sardor", gender: "mal", id: 5 };  
const result20 = addPersonWithGenderCheck(people20, newPerson20);  
console.log("20-masala natijasi:", result20);  
// Savollar:  
// 1. Ulug'bek jinsni qanday tekshirishi mumkin?  
// 2. Agar jins noto'g'ri bo'lsa, qanday xabar qaytarish mumkin?  
// 3. Ulug'bekning shoshqaloqligini ko'rib, uni qanday masxara qilgan bo'lardingiz? рџ‚