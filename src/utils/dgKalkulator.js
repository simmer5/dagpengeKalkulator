// 2020 G = NOK101351

export const validator = (intekt, D, callback) => {
  const intekter = intekt.map((item) => parseInt(item));

  let G3 = Math.round(3 * D);
  let G15 = Math.round(D * 1.5);
  let G6 = Math.round(D * 6); //
  const sum = intekter.reduce((i, sum) => sum + i);

  // avg = tre år gjennomsnittsinntekten
  // lastYear = intekt siste år
  const avg = Math.round(sum / 3);
  const lastYear = intekter[2];
  // sjeker hvis man her rett til dagpenger
  if (avg <= G3 && lastYear <= G15) {
    return null;
  } else {
    const grunnlaget = avg > lastYear ? avg : lastYear; // velger grunnlaget
    const dagpengerGrunlaget = grunnlaget < G6 ? grunnlaget : G6; // sjeker om grunlager er mindre en 6G

    return callback(dagpengerGrunlaget);
  }
};
