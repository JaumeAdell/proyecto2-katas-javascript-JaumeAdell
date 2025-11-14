const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

//6.1
const TotalScore = exams.reduce((accumulator, currentExam) => {
  return accumulator + currentExam.score;
}, 0);

console.log(TotalScore);

//6.2
const ExamenesAprobados = exams.reduce((accumulator, currentExam) => {
  if (currentExam.score >= 5) {
    return accumulator + currentExam.score;
  }
  return accumulator;
}, 0);

console.log(ExamenesAprobados);

//6.3
const averageScore = exams.reduce((accumulator, currentExam, index, array) => {
    accumulator += currentExam.score;
    if (index === array.length - 1) {
        return accumulator / array.length;
    }
    return accumulator;
}, 0);

console.log(averageScore);