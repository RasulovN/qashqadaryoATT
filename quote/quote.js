const quotes = [
  {
    quote: `Agar biror narsa ishlamasa, tashvishlanmang. Agar hamma narsa ishlayotgan bo'lsa, siz ishdan bo'shatilasiz.`,
    author: "Mosherning dasturiy ta'minot muhandisligi qonuni"
  },
  {
    quote: '12 Soat ishlash kerak emas, samarali ishlash keark.',
    author: 'Pavel Durov'
  },
  {
    quote: "Dasturchini kod satrlarini sanash orqali samaradorlikni o'lchash, samolyotni uning og'irligi bo'yicha qurilgan deb baholashga o'xshaydi.",
    author: 'Bill Gates'
  },
  {
    quote: "Bugungi kunda dasturlarning aksariyati bir-birining ustiga qo'yilgan millionlab g'ishtlardan iborat Misr piramidalariga o'xshaydi va strukturaviy yaxlitliksiz - ular shunchaki qo'pol kuch va minglab qullar tomonidan qurilgan.",
    author: 'Alan Kay'
  },
  {
    quote: "Most good programmers do their jobs not because they expect to be paid or recognized, but because they enjoy programming.",
    author: 'Linus Torvalds'
  },
  {
    quote: "Dasturlar ularni o'qiydigan odamlar uchun yozilishi kerak va bu dasturlarni bajaradigan mashinalar ikkinchi darajali.",
    author: 'Harold Abelson'
  },
  {
    quote: "People who think they hate computers actually hate bad programmers.",
    author: 'Larry Niven'
  },
  {
    quote: "Agar biror kishiga dastur bersangiz, uni bir kun band qilasiz. Agar siz odamni dasturlashni o'rgatsangiz, uni bir umr band qilasiz.",
    author: 'Waseem Latif'
  },
  {
    quote: `Dasturlash haqidagi fikringizni o'zgartirmaydigan til o'rganishga arzimaydi.`,
    author: 'Alan J. Perlis'
  },
  {
    quote: "Ba'zan eng yaxshi dasturlar qog'ozga yoziladi. Ularni dasturlash ikkinchi darajali narsadir.",
    author: 'Max Kanat-Alexander'
  },
  {
    quote: "Dasturlash katta va imkonsiz narsani kichik va haqiqiy narsaga aylantirishdir.",
    author: 'Jazzwant'
  },
  {
    quote: 'Dasturchilar biz xohlaganchalik matematik emas.',
    author: 'Richard P. Gabriel'
  },
  {
    quote: "Dasturlash qiyin. Hamma narsa qurilgan asosiy qoidalar juda oddiy, ammo dastur rivojlanib borgan sari o'zi o'z qoidalari va qonunlarini joriy qila boshlaydi. Shunday qilib, dasturchi o'zi adashib qolishi mumkin bo'lgan labirint quradi.",
    author: 'Marijn Haverbeke'
  },
  {
    quote: "Java C++ bo'lib, barcha qurollar, pichoqlar va kaltaklar olib tashlangan.",
    author: 'James Gosling'
  },
  // {
  //   quote: `Usulning yomon nomi siyosatchilarning saylovdagi va'dalariga o'xshaydi. Biror narsa haqida gapirayotganga o'xshaydi, lekin agar siz bu haqda o'ylab ko'rsangiz, bu nima ekanligi aniq emas.`,
  //   author: 'C. MacConnell'
  // }, 
  // {
  //   quote: `Ishlamaydigan dastur odatda yaxshi ishlamaydigan dasturga qaraganda kamroq zarar keltiradi.`,
  //   author: 'Dave Thomas'
  // },
  // {
  //   quote: 'How much easier it would be to write programs if it were not for customers.',
  //   author: 'R. S. Martin'
  // },
  // {
  //   quote: 'Young professionals don’t know how to work, while experienced professionals know not to work.',
  //   author: 'Alexander Golov'
  // },
  // {
  //   quote: 'I think the art of programming is a little more complicated than other human skills. Programming makes you better in the same way that learning a foreign language, math, or reading books helps you develop.',
  //   author: 'Jack Dorsey'
  // },
  // {
  //   quote: 'Just as painting a picture is an art for the soul, so writing a program is an art for the mind.',
  //   author: 'Volnik'
  // },
  // {
  //   quote: 'Testing does not detect errors such as creating the wrong application.',
  //   author: 'Steve McConnell'
  // },
  // {
  //   quote: `Some people, while solving a problem, think: "Why don't I use regular expressions?". After that, they already have two problems ...`,
  //   author: 'Jamie Zawinski'
  // },
  // {
  //   quote: 'Small programs accidentally compile and run correctly the first time they try. But if this happens to any non-trivial program, then it is very, very suspicious.',
  //   author: 'Bjarne Stroustrup'
  // },
  // {
  //   quote: 'The main problem of programmers is that their mistakes cannot be predicted.',
  //   author: 'Seymour Cray'
  // },
]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function quoteGenerateRandom() {
  let idx = getRandomInt(0, quotes.length + 1)
  if (idx < 0) return;
  let quote = quotes[idx]
  return quote
}

module.exports = quoteGenerateRandom