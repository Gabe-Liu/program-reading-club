{
  let boys = 0;
  let girls = 0;

  const getBoyOrGirl = () => {
    if (Math.round(Math.random())) {
      boys++;
      getBoyOrGirl();
    } else {
      girls++;
    }
  }
  const birthChild = (num: number) => {
    for (let i = 0; i < num ; i++) {
      getBoyOrGirl();
    }

    console.log('ratio', (boys / girls).toFixed(5))
  }

  birthChild(1000);
}